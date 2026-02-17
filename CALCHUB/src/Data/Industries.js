import {
    DollarSign, Heart, Home, TrendingUp, ShoppingCart,
    BarChart3, GraduationCap, Dumbbell, Building2, Plane,
    Users, Wrench, Leaf, Factory, Calculator
} from "lucide-react";

export const industries = [
    { id: "finance", name: "Finance & Banking", description: "Loans, interest rates, investments, and financial planning", icon: DollarSign, color: "hsl(172, 50%, 36%)" , calculatorCount: 3 },
    { id: "healthcare", name: "Healthcare", description: "BMI, calorie needs, dosage calculations", icon: Heart, color: "hsl(0, 72%, 51%)", calculatorCount: 2 },
    { id: "realestate", name: "Real Estate", description: "Mortgage, ROI, rental yield calculations", icon: Home, color: "hsl(30, 80%, 55%)", calculatorCount: 2 },
    { id: "investment", name: "Investment & Tax", description: "Returns, compound interest, tax estimators", icon: TrendingUp, color: "hsl(260, 55%, 50%)", calculatorCount: 2 },
    { id: "ecommerce", name: "E-commerce", description: "Profit margins, shipping costs, pricing", icon: ShoppingCart, color: "hsl(195, 60%, 42%)", calculatorCount: 1 },
    { id: "marketing", name: "Digital Marketing", description: "ROI, CPC, conversion rate analysis", icon: BarChart3, color: "hsl(340, 65%, 50%)", calculatorCount: 2 },
    { id: "education", name: "Education", description: "GPA, loan repayment, scholarship estimators", icon: GraduationCap, color: "hsl(220, 55%, 50%)", calculatorCount: 1 },
    { id: "fitness", name: "Fitness & Wellness", description: "Calorie burn, body fat, workout planners", icon: Dumbbell, color: "hsl(145, 55%, 40%)", calculatorCount: 1 },
    { id: "construction", name: "Construction", description: "Material estimates, cost calculations", icon: Building2, color: "hsl(35, 45%, 45%)", calculatorCount: 1 },
    { id: "travel", name: "Travel & Hospitality", description: "Budget planners, currency converters", icon: Plane, color: "hsl(200, 60%, 50%)", calculatorCount: 1 },
    { id: "hr", name: "HR & Payroll", description: "Salary, tax deductions, benefits calculations", icon: Users, color: "hsl(280, 50%, 50%)", calculatorCount: 1 },
    { id: "engineering", name: "Engineering", description: "Unit conversions, load calculations", icon: Wrench, color: "hsl(210, 30%, 40%)", calculatorCount: 1 },
];

export const calculators = [
  // Finance
    {
        id: "emi-calculator",
        name: "EMI Calculator",
        description: "Calculate your Equated Monthly Installment for loans",
        industryId: "finance",
        fields: [
        { name: "principal", label: "Loan Amount", type: "number", prefix: "$", defaultValue: 100000 },
        { name: "rate", label: "Annual Interest Rate", type: "number", suffix: "%", defaultValue: 8 },
        { name: "tenure", label: "Loan Tenure (months)", type: "number", suffix: "months", defaultValue: 60 },
        ],
        formula: "(() => { const r = rate / 1200; const emi = principal * r * Math.pow(1+r, tenure) / (Math.pow(1+r, tenure) - 1); return Math.round(emi * 100) / 100; })()",
        resultLabel: "Monthly EMI",
        resultPrefix: "$",
        explanation: "EMI = P × r × (1+r)^n / ((1+r)^n – 1), where P = principal, r = monthly rate, n = tenure in months",
        tags: ["popular", "beginner"],
    },
    {
        id: "compound-interest",
        name: "Compound Interest",
        description: "Calculate compound interest growth over time",
        industryId: "finance",
        fields: [
        { name: "principal", label: "Principal Amount", type: "number", prefix: "$", defaultValue: 10000 },
        { name: "rate", label: "Annual Rate", type: "number", suffix: "%", defaultValue: 7 },
        { name: "years", label: "Time Period", type: "number", suffix: "years", defaultValue: 10 },
        { name: "compounds", label: "Compounds per Year", type: "number", defaultValue: 12 },
        ],
        formula: "(() => { const amount = principal * Math.pow(1 + rate / (100 * compounds), compounds * years); return Math.round(amount * 100) / 100; })()",
        resultLabel: "Future Value",
        resultPrefix: "$",
        explanation: "A = P(1 + r/n)^(nt), where P = principal, r = annual rate, n = compounds per year, t = years",
        tags: ["popular", "beginner"],
    },
    {
        id: "savings-goal",
        name: "Savings Goal",
        description: "How much to save monthly to reach your goal",
        industryId: "finance",
        fields: [
        { name: "goal", label: "Savings Goal", type: "number", prefix: "$", defaultValue: 50000 },
        { name: "rate", label: "Annual Return Rate", type: "number", suffix: "%", defaultValue: 5 },
        { name: "years", label: "Time to Goal", type: "number", suffix: "years", defaultValue: 5 },
        ],
        formula: "(() => { const r = rate / 1200; const n = years * 12; const pmt = goal * r / (Math.pow(1 + r, n) - 1); return Math.round(pmt * 100) / 100; })()",
        resultLabel: "Monthly Savings Needed",
        resultPrefix: "$",
        explanation: "PMT = FV × r / ((1+r)^n - 1)",
        tags: ["beginner"],
    },
  // Healthcare
    {
        id: "bmi-calculator",
        name: "BMI Calculator",
        description: "Calculate your Body Mass Index",
        industryId: "healthcare",
        fields: [
        { name: "weight", label: "Weight", type: "number", suffix: "kg", defaultValue: 70 },
        { name: "height", label: "Height", type: "number", suffix: "cm", defaultValue: 175 },
        ],
        formula: "(() => { const h = height / 100; return Math.round(weight / (h * h) * 10) / 10; })()",
        resultLabel: "Your BMI",
        explanation: "BMI = weight(kg) / height(m)². Normal range: 18.5–24.9",
        tags: ["popular", "beginner"],
    },
    {
        id: "calorie-needs",
        name: "Daily Calorie Needs",
        description: "Estimate your daily caloric requirements",
        industryId: "healthcare",
        fields: [
        { name: "weight", label: "Weight", type: "number", suffix: "kg", defaultValue: 70 },
        { name: "height", label: "Height", type: "number", suffix: "cm", defaultValue: 175 },
        { name: "age", label: "Age", type: "number", suffix: "years", defaultValue: 30 },
        { name: "activityLevel", label: "Activity Multiplier (1.2-1.9)", type: "number", defaultValue: 1.55 },
        ],
        formula: "(() => { const bmr = 10 * weight + 6.25 * height - 5 * age + 5; return Math.round(bmr * activityLevel); })()",
        resultLabel: "Daily Calories",
        resultSuffix: " kcal",
        explanation: "Mifflin-St Jeor: BMR = 10×weight + 6.25×height - 5×age + 5, multiplied by activity factor",
        tags: ["popular"],
    },
  // Real Estate
    {
        id: "mortgage-calculator",
        name: "Mortgage Calculator",
        description: "Calculate monthly mortgage payments",
        industryId: "realestate",
        fields: [
        { name: "homePrice", label: "Home Price", type: "number", prefix: "$", defaultValue: 350000 },
        { name: "downPayment", label: "Down Payment", type: "number", prefix: "$", defaultValue: 70000 },
        { name: "rate", label: "Interest Rate", type: "number", suffix: "%", defaultValue: 6.5 },
        { name: "years", label: "Loan Term", type: "number", suffix: "years", defaultValue: 30 },
        ],
        formula: "(() => { const p = homePrice - downPayment; const r = rate / 1200; const n = years * 12; const pmt = p * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1); return Math.round(pmt * 100) / 100; })()",
        resultLabel: "Monthly Payment",
        resultPrefix: "$",
        explanation: "Standard amortization formula on (Home Price - Down Payment)",
        tags: ["popular", "beginner"],
    },
    {
        id: "rental-yield",
        name: "Rental Yield",
        description: "Calculate annual rental yield percentage",
        industryId: "realestate",
        fields: [
        { name: "propertyValue", label: "Property Value", type: "number", prefix: "$", defaultValue: 300000 },
        { name: "monthlyRent", label: "Monthly Rent", type: "number", prefix: "$", defaultValue: 2000 },
        { name: "annualExpenses", label: "Annual Expenses", type: "number", prefix: "$", defaultValue: 5000 },
        ],
        formula: "(() => { const net = monthlyRent * 12 - annualExpenses; return Math.round(net / propertyValue * 10000) / 100; })()",
        resultLabel: "Net Rental Yield",
        resultSuffix: "%",
        explanation: "Yield = (Annual Rent - Expenses) / Property Value × 100",
        tags: ["advanced"],
    },
  // Marketing
    {
        id: "marketing-roi",
        name: "Marketing ROI",
        description: "Calculate return on marketing investment",
        industryId: "marketing",
        fields: [
        { name: "revenue", label: "Revenue from Campaign", type: "number", prefix: "$", defaultValue: 50000 },
        { name: "cost", label: "Marketing Cost", type: "number", prefix: "$", defaultValue: 10000 },
        ],
        formula: "(() => { return Math.round((revenue - cost) / cost * 10000) / 100; })()",
        resultLabel: "ROI",
        resultSuffix: "%",
        explanation: "ROI = (Revenue - Cost) / Cost × 100",
        tags: ["popular", "beginner"],
    },
    {
        id: "cpc-calculator",
        name: "Cost Per Click",
        description: "Calculate your cost per click from ad spend",
        industryId: "marketing",
        fields: [
        { name: "totalSpend", label: "Total Ad Spend", type: "number", prefix: "$", defaultValue: 5000 },
        { name: "clicks", label: "Total Clicks", type: "number", defaultValue: 2500 },
        ],
        formula: "(() => { return Math.round(totalSpend / clicks * 100) / 100; })()",
        resultLabel: "Cost Per Click",
        resultPrefix: "$",
        explanation: "CPC = Total Spend / Total Clicks",
        tags: ["beginner"],
    },
  // Investment
    {
        id: "sip-calculator",
        name: "SIP Returns",
        description: "Calculate systematic investment plan returns",
        industryId: "investment",
        fields: [
        { name: "monthly", label: "Monthly Investment", type: "number", prefix: "$", defaultValue: 500 },
        { name: "rate", label: "Expected Annual Return", type: "number", suffix: "%", defaultValue: 12 },
        { name: "years", label: "Investment Period", type: "number", suffix: "years", defaultValue: 10 },
        ],
        formula: "(() => { const r = rate / 1200; const n = years * 12; const fv = monthly * ((Math.pow(1+r, n) - 1) / r) * (1+r); return Math.round(fv * 100) / 100; })()",
        resultLabel: "Future Value",
        resultPrefix: "$",
        explanation: "FV = PMT × [((1+r)^n - 1) / r] × (1+r)",
        tags: ["popular"],
    },
    {
        id: "tax-estimator",
        name: "Simple Tax Estimator",
        description: "Estimate your income tax (simplified US brackets)",
        industryId: "investment",
        fields: [
        { name: "income", label: "Annual Income", type: "number", prefix: "$", defaultValue: 85000 },
        { name: "deductions", label: "Deductions", type: "number", prefix: "$", defaultValue: 13850 },
        ],
        formula: "(() => { const taxable = Math.max(0, income - deductions); let tax = 0; const brackets = [[11000,0.10],[44725-11000,0.12],[95375-44725,0.22],[191950-95375,0.24]]; let remaining = taxable; for(const [size,rate] of brackets) { if(remaining <= 0) break; const amt = Math.min(remaining, size); tax += amt * rate; remaining -= amt; } if(remaining > 0) tax += remaining * 0.32; return Math.round(tax); })()",
        resultLabel: "Estimated Tax",
        resultPrefix: "$",
        explanation: "Based on simplified 2024 US federal tax brackets",
        tags: ["popular", "advanced"],
    },
  // E-commerce
    {
        id: "profit-margin",
        name: "Profit Margin",
        description: "Calculate your profit margin percentage",
        industryId: "ecommerce",
        fields: [
        { name: "revenue", label: "Revenue", type: "number", prefix: "$", defaultValue: 100000 },
        { name: "cost", label: "Total Costs", type: "number", prefix: "$", defaultValue: 65000 },
        ],
        formula: "(() => { return Math.round((revenue - cost) / revenue * 10000) / 100; })()",
        resultLabel: "Profit Margin",
        resultSuffix: "%",
        explanation: "Margin = (Revenue - Costs) / Revenue × 100",
        tags: ["popular", "beginner"],
    },
];

export function getIndustryById(id) {
    return industries.find(i => i.id === id);
}

export function getCalculatorsByIndustry(industryId) {
    return calculators.filter(c => c.industryId === industryId);
}

export function getCalculatorById(id) {
    return calculators.find(c => c.id === id);
}

export function getFeaturedCalculators() {
    return calculators.filter(c => c.tags.includes("popular")).slice(0, 6);
}