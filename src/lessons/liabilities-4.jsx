import LessonLayout from '../components/LessonLayout'

export default function Liabilities4() {
  return (
    <LessonLayout
      number="169"
      title="Liabilities — Part 4"
      summary="17 debt structures and financing forms — interest-bearing debt, revolving credit, credit facilities, overdrafts, convertible, secured, unsecured, mortgage, equipment, vehicle, working-capital, construction, acquisition, and bridge loans."
    >
      <h2>Liabilities — Part 4</h2>

      <h2>Interest-Bearing Debt</h2>
      <p>Debt that requires interest payments.</p>
      <p>Examples: bank loans, bonds, credit lines, and notes payable.</p>
      <p><strong>Debt Service = Principal Payments + Interest Payments</strong></p>

      <h2>Revolving Credit</h2>
      <p>A facility that allows a borrower to borrow, repay, and borrow again up to an approved limit.</p>
      <p>Example: Credit limit = ₱500,000; current borrowing = ₱200,000; potential available capacity = approximately ₱300,000, subject to the agreement.</p>

      <h2>Credit Facilities</h2>
      <p>A financing arrangement under which a lender makes borrowing capacity available to a borrower.</p>

      <h2>Overdrafts</h2>
      <p>A bank overdraft allows an account to go below its normal available cash balance up to an agreed limit. It can provide short-term liquidity but may carry significant costs.</p>

      <h2>Convertible Debt</h2>
      <p>Debt that may convert into equity under specified terms. Common in startup financing.</p>
      <p>Key terms: conversion mechanism, conversion price, discount, valuation cap where applicable, interest, maturity, and investor rights.</p>

      <h2>Secured Debt</h2>
      <p>Debt supported by collateral.</p>
      <p>Examples: mortgage, equipment loan secured by equipment, and asset-backed financing.</p>
      <p>Failure to meet obligations may allow the lender to enforce rights against collateral according to the agreement and law.</p>

      <h2>Unsecured Debt</h2>
      <p>Debt without specific collateral securing the obligation. The lender primarily relies on the borrower's creditworthiness and contractual/legal rights.</p>

      <h2>Mortgage Debt</h2>
      <p>Debt secured by real property.</p>
      <p>Example: A company borrows ₱5 million to purchase property and uses the property as security.</p>

      <h2>Equipment Loans</h2>
      <p>Loans used to purchase equipment. The equipment may serve as collateral.</p>

      <h2>Vehicle Loans</h2>
      <p>Loans used to finance vehicles. The financed vehicle may serve as collateral depending on the arrangement.</p>

      <h2>Working-Capital Loans</h2>
      <p>Loans intended to finance short-term operational requirements.</p>
      <p>Examples: inventory, receivables gaps, payroll, and supplier payments.</p>

      <h2>Construction Loans</h2>
      <p>Financing used to fund construction projects. Drawdowns may occur according to project milestones.</p>

      <h2>Acquisition Debt</h2>
      <p>Debt used to finance the purchase of another business or assets.</p>
      <p>The acquired business's cash flows may become part of the repayment strategy, subject to the transaction structure.</p>

      <h2>Bridge Loans</h2>
      <p>Short-term financing intended to bridge a temporary funding gap until longer-term financing, asset sales, investment proceeds, or another expected source becomes available.</p>

      <h3>Debt Structure</h3>
      <pre>{`Debt
├── Secured
│   ├── Mortgage
│   ├── Equipment
│   └── Vehicle
│
├── Unsecured
│   ├── Notes
│   └── Credit facilities
│
└── Purpose
    ├── Working Capital
    ├── Construction
    ├── Acquisition
    └── Bridge Financing`}</pre>
    </LessonLayout>
  )
}
