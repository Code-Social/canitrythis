# simple CLI EDA script: tools/ecom-analytics/src/analysis.py
import pandas as pd
import matplotlib.pyplot as plt
import os
import argparse

def basic_eda(df, out_dir="outputs"):
    os.makedirs(out_dir, exist_ok=True)
    # revenue over time
    if 'order_date' in df.columns and 'revenue' in df.columns:
        df['order_date'] = pd.to_datetime(df['order_date'])
        monthly = df.groupby(pd.Grouper(key='order_date', freq='M'))['revenue'].sum()
        plt.figure(figsize=(10,4))
        monthly.plot()
        plt.title('Monthly Revenue')
        plt.xlabel('Month')
        plt.ylabel('Revenue')
        plt.tight_layout()
        plt.savefig(os.path.join(out_dir, 'monthly_revenue.png'))
        plt.close()

    # category sales
    if 'category' in df.columns and 'revenue' in df.columns:
        cat = df.groupby('category')['revenue'].sum().sort_values(ascending=False).head(10)
        plt.figure(figsize=(8,5))
        cat.plot(kind='bar')
        plt.title('Top Categories by Revenue')
        plt.tight_layout()
        plt.savefig(os.path.join(out_dir, 'top_categories.png'))
        plt.close()

    # more charts...
    print("Saved charts to", out_dir)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--csv', required=True, help='Path to dataset CSV')
    parser.add_argument('--out', default='outputs', help='Output folder for plots')
    args = parser.parse_args()

    df = pd.read_csv(args.csv)
    basic_eda(df, args.out)

if __name__ == "__main__":
    main()
