import jsPDF from 'jspdf';

export const exportInvoiceToPDF = (invoice) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text('VaidyaVihar Diagnostic - Invoice', 20, 20);

  doc.setFontSize(12);
  doc.text(`Invoice ID: ${invoice.id}`, 20, 40);
  doc.text(`Patient ID: ${invoice.patient_id}`, 20, 50);
  doc.text(`Branch ID: ${invoice.branch_id}`, 20, 60);
  doc.text(`Amount: ₹${invoice.total_amount}`, 20, 70);
  doc.text(`Status: ${invoice.status}`, 20, 80);
  doc.text(`Date: ${invoice.created_at}`, 20, 90);

  doc.save(`invoice-${invoice.id}.pdf`);
};