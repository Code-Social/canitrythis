import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import os

st.set_page_config("E-commerce Analytics Practice", layout="wide")
st.title("📊 E-commerce Analytics — Practice Challenge")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "../data/ecommerce_sample.csv")

# ---------- Instructions ----------
with st.expander("📘 Challenge Instructions", expanded=True):
    st.markdown("""
    ### Tasks
    1. Explore the dataset columns
    2. Convert `order_date` to datetime
    3. Find monthly sales trends
    4. Identify top categories by revenue
    5. Visualize your insights

    ✅ Use the checkboxes to display charts  
    ✅ Upload your own dataset to experiment
    """)

# ---------- Load Data ----------
uploaded = st.file_uploader("Upload CSV (optional)", type=["csv"])
use_sample = st.button("Use Sample Dataset")

if uploaded:
    df = pd.read_csv(uploaded)
elif use_sample:
    df = pd.read_csv(DATA_PATH)
else:
    st.info("Upload a CSV or use the sample dataset.")
    st.stop()

df.columns = df.columns.str.lower()

st.subheader("📄 Dataset Preview")
st.dataframe(df.head())

# ---------- Validation ----------
required_cols = {"order_date", "revenue", "category"}
missing = required_cols - set(df.columns)

if missing:
    st.error(f"Missing required columns: {', '.join(missing)}")
    st.stop()

df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")

# ---------- Visualizations ----------
st.subheader("📈 Analysis & Visualization")

if st.checkbox("✅ Monthly Revenue Trend"):
    monthly = df.groupby(pd.Grouper(key="order_date", freq="M"))["revenue"].sum()
    st.line_chart(monthly)

if st.checkbox("✅ Top Categories by Revenue"):
    fig, ax = plt.subplots()
    df.groupby("category")["revenue"].sum().sort_values(ascending=False).plot(
        kind="bar", ax=ax
    )
    ax.set_ylabel("Revenue")
    st.pyplot(fig)

# ---------- Insights ----------
st.subheader("🧠 Write Your Insights")
insight = st.text_area("What did you observe from the data?")

if st.button("Submit Challenge"):
    if insight.strip():
        st.success("✅ Challenge completed! Great work.")
    else:
        st.warning("Please write at least one insight before submitting.")
