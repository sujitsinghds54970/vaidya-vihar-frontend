import { exportInvoiceToPDF } from '../utils/exportToPDF';

...

{invoices.map(inv => (
  <li key={inv.id}>
    Invoice #{inv.id} | ₹{inv.total_amount} | Status: {inv.status}
    <button onClick={() => exportInvoiceToPDF(inv)}>Download PDF</button>
  </li>
))}