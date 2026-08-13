export type Project = {
  slug: string
  title: string
  titleEn: string
  description: string
  stack: string[]
  status: string
  href?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'safety-monitoring',
    title: 'سامانه پایش ایمنی انبار',
    titleEn: 'Warehouse Safety Monitoring System (IAI-001)',
    description:
      'ترکیب تشخیص اشیا با YOLOv8، یک موتور قانون برای رخدادهای ایمنی، و یک مدل زبانی Qwen2.5 که به‌صورت محلی روی سرور اجرا می‌شود و گزارش HSE فارسی تولید می‌کند؛ پشت‌صحنه با FastAPI و رابط با Gradio.',
    stack: ['YOLOv8', 'Rule Engine', 'Qwen2.5', 'FastAPI', 'Gradio', 'Pydantic'],
    status: 'در حال توسعه · AI Builders Iran',
    featured: true,
  },
  {
    slug: 'ml-lablator',
    title: 'آزمایشگاه یادگیری ماشین (ML_Lablator)',
    titleEn: 'Data Science Laboratory — Streamlit ML Tool',
    description:
      'ابزار چندصفحه‌ای Streamlit برای تحلیل اکتشافی داده، پیش‌پردازش، آموزش مدل و ارزیابی؛ شامل خوشه‌بندی تعاملی، منحنی یادگیری با باند انحراف‌معیار، و دانلود مستقیم تمام نمودارها.',
    stack: ['Streamlit', 'scikit-learn', 'Matplotlib', 'Pandas'],
    status: 'بازآرایی و افزودن قابلیت کامل شد',
    featured: true,
  },
  {
    slug: 'kidney-stone-segmentation',
    title: 'قطعه‌بندی تصاویر پزشکی سنگ کلیه',
    titleEn: 'Kidney Stone Medical Image Segmentation',
    description:
      'پروژه گروهی به سرپرستی من با معماری‌های U-Net، U-Net++ و YOLOv8-seg؛ بهینه‌سازی با Dice و Combo Loss، و نمایش نتایج در دمویی با Gradio/Streamlit.',
    stack: ['U-Net', 'U-Net++', 'YOLOv8-seg', 'Dice Loss'],
    status: 'سرپرست تیم · ۳ نفره',
    featured: true,
  },
  {
    slug: 'rice-classification',
    title: 'دسته‌بندی انواع برنج',
    titleEn: 'Rice Type Classification',
    description:
      'خط لوله بینایی کامپیوتری با PyTorch از پایه برای ۵ رقم برنج، با معماری CNN اختصاصی (BaseModel6_pt) و دموی Streamlit.',
    stack: ['PyTorch', 'CNN', 'Streamlit', 'Kaggle'],
    status: 'تکمیل‌شده',
  },
  {
    slug: 'diabetes-prediction',
    title: 'پیش‌بینی دیابت',
    titleEn: 'Diabetes Prediction',
    description: 'خط لوله یادگیری ماشین شامل EDA، مهندسی ویژگی، آموزش و ارزیابی مدل.',
    stack: ['scikit-learn', 'Pandas', 'EDA'],
    status: 'تکمیل‌شده',
    href: 'https://github.com/HosseinHeydari2004',
  },
  {
    slug: 'house-price',
    title: 'پیش‌بینی قیمت مسکن',
    titleEn: 'House Price Prediction',
    description: 'پروژه رگرسیون با XGBoost و مهندسی ویژگی، همراه با تنظیم دقیق ابرپارامترها.',
    stack: ['XGBoost', 'scikit-learn', 'Hyperparameter Tuning'],
    status: 'تکمیل‌شده',
    href: 'https://github.com/HosseinHeydari2004',
  },
]
