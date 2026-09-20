import LessonLayout from '../components/LessonLayout'

export default function Equity7() {
  return (
    <LessonLayout
      number="180"
      title="Equity — Part 7"
      summary="12 capital raising and ownership categories — capital raising, equity crowdfunding, public offering, private placement, share issuance, share repurchase, ownership transfer, founder, investor, and control dilution."
    >
      <h2>Equity — Part 7</h2>

      <h2>Capital Raising</h2>
      <p>The process of obtaining capital from: founders, investors, institutions, public markets, and strategic partners.</p>

      <h2>Equity Crowdfunding</h2>
      <p>A method in which multiple investors contribute capital in exchange for ownership or securities, subject to applicable laws and platform rules.</p>

      <h2>Public Offering</h2>
      <p>Offering securities to public investors under applicable securities regulations.</p>

      <h2>Private Placement</h2>
      <p>Selling securities to selected private investors rather than through a broad public offering.</p>

      <h2>Share Issuance</h2>
      <p>Creating and selling new shares. It can increase company capital but may dilute existing shareholders.</p>

      <h2>Share Repurchase</h2>
      <p>A company buys back its own shares.</p>
      <p>Potential effects include: reduced shares outstanding, increased ownership percentage for remaining holders, reduced cash, and changes in financial ratios. Treatment depends on the transaction and accounting rules.</p>

      <h2>Ownership Transfer</h2>
      <p>Transfer of existing ownership from one holder to another. Unlike new share issuance, an ownership transfer does not necessarily provide new capital to the company.</p>

      <h2>Founder Dilution</h2>
      <p>Reduction in founder ownership percentage caused by new equity issuance or other ownership changes.</p>

      <h2>Investor Dilution</h2>
      <p>Reduction in an existing investor's ownership percentage caused by subsequent issuance of shares or equivalent interests.</p>

      <h2>Control Dilution</h2>
      <p>Reduction in an owner's ability to control voting or strategic decisions.</p>

      <h3>Equity Transaction Flow</h3>
      <pre>{`Capital Need
     ↓
Choose Financing Method
     ↓
Determine Valuation
     ↓
Determine Securities
     ↓
Issue / Transfer Ownership
     ↓
Receive Capital
     ↓
Update Ownership
     ↓
Manage Investor Rights`}</pre>
    </LessonLayout>
  )
}
