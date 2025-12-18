import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';

const DataImportWizard = ({ onComplete }) => {
  const [importMethod, setImportMethod] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const importMethods = [
    {
      id: 'csv',
      title: 'Upload CSV File',
      description: 'Import your financial data from a CSV file',
      icon: 'FileText',
      recommended: true,
    },
    {
      id: 'integration',
      title: 'Sync from Integration',
      description: 'Automatically import from connected services',
      icon: 'RefreshCw',
      recommended: true,
    },
    {
      id: 'manual',
      title: 'Enter Manually',
      description: 'Add your data manually through our interface',
      icon: 'Edit',
      recommended: false,
    },
    {
      id: 'skip',
      title: 'Skip for Now',
      description: 'Start with a clean slate and add data later',
      icon: 'FastForward',
      recommended: false,
    },
  ];

  const handleFileUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setIsUploading(true);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            onComplete('csv');
          }, 500);
        }
      }, 200);
    }
  };

  const handleMethodSelect = (method) => {
    setImportMethod(method);
    if (method !== 'csv') {
      setTimeout(() => {
        onComplete(method);
      }, 300);
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Import Your Financial Data</h2>
        <p className="text-muted-foreground">
          Choose how you'd like to bring your existing financial data into FinTech Pro.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {importMethods?.map((method) => (
          <button
            key={method?.id}
            onClick={() => handleMethodSelect(method?.id)}
            disabled={isUploading}
            className={`text-left p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed ${
              importMethod === method?.id
                ? 'border-primary bg-primary/5 shadow-lg'
                : 'border-border bg-card hover:border-primary/50'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  importMethod === method?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <Icon name={method?.icon} size={24} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{method?.title}</h3>
                  {method?.recommended && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{method?.description}</p>
              </div>

              {importMethod === method?.id && (
                <Icon name="CheckCircle2" size={24} color="var(--color-primary)" />
              )}
            </div>
          </button>
        ))}
      </div>
      {importMethod === 'csv' && !isUploading && (
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Upload Your CSV File</h3>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors duration-300">
              <Icon name="Upload" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
              <p className="text-sm font-medium text-foreground mb-2">
                Drag and drop your CSV file here, or click to browse
              </p>
              <p className="text-xs text-muted-foreground mb-4">Supported format: CSV (Max 10MB)</p>
              <Input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
                id="csv-upload"
              />
              <label htmlFor="csv-upload">
                <Button variant="outline" asChild>
                  <span>Choose File</span>
                </Button>
              </label>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-foreground mb-1">CSV Format Requirements</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Include headers: Date, Description, Amount, Category</li>
                    <li>• Use MM/DD/YYYY format for dates</li>
                    <li>• Amounts should be numeric (negative for expenses)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isUploading && (
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <Icon name="FileText" size={24} color="var(--color-primary)" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Uploading financial_data.csv</p>
              <p className="text-xs text-muted-foreground">Processing your data...</p>
            </div>
            <span className="text-sm font-semibold text-primary">{uploadProgress}%</span>
          </div>

          <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-growth transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DataImportWizard;