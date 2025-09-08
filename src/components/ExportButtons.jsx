function ExportButtons() {
  return (
    <div>
      <h3>Export Invoices</h3>
      <button onClick={() => window.open('/api/export/invoices/csv')}>Download CSV</button>
      <button onClick={() => window.open('/api/export/invoices/json')}>Download JSON</button>
    </div>
  );
}

export default ExportButtons;