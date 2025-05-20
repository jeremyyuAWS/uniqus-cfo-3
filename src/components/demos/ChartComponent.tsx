import React, { useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import annotationPlugin from 'chartjs-plugin-annotation';

// Register ChartJS components and annotation plugin
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, annotationPlugin);

export enum ChartType {
  Line = 'line',
  Bar = 'bar',
  Pie = 'pie'
}

interface ChartComponentProps {
  type: ChartType;
  data: any;
  options?: any;
  height?: number;
  title?: string;
  subtitle?: string;
  onPointClick?: (point: { index: number; label: string; value: number }) => void;
  extraDatasets?: any[];
}

export const ChartComponent: React.FC<ChartComponentProps> = ({ 
  type, 
  data, 
  options = {}, 
  height = 300,
  title,
  subtitle,
  onPointClick,
  extraDatasets = []
}) => {
  const chartRef = useRef<any>(null);

  // Merge extra datasets if provided
  const mergedData = {
    ...data,
    datasets: [
      ...(data.datasets || []),
      ...extraDatasets
    ]
  };

  // Download chart as PNG
  const handleDownloadPNG = () => {
    if (chartRef.current) {
      const url = chartRef.current.toBase64Image();
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title || 'chart'}.png`;
      link.click();
    }
  };

  // Download data as CSV
  const handleDownloadCSV = () => {
    if (!mergedData.labels || !mergedData.datasets) return;
    let csv = 'Label,' + mergedData.datasets.map((ds: any) => ds.label).join(',') + '\n';
    mergedData.labels.forEach((label: string, i: number) => {
      csv += label;
      mergedData.datasets.forEach((ds: any) => {
        csv += ',' + (ds.data[i] !== undefined ? ds.data[i] : '');
      });
      csv += '\n';
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title || 'chart'}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Drill-down: handle point click
  const handleChartClick = (event: any, elements: any[]) => {
    if (onPointClick && elements && elements.length > 0 && chartRef.current) {
      const chart = chartRef.current;
      const el = elements[0];
      const datasetIndex = el.datasetIndex;
      const index = el.index;
      const label = mergedData.labels[index];
      const value = mergedData.datasets[datasetIndex].data[index];
      onPointClick({ index, label, value });
    }
  };

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          color: '#374151'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 10,
        bodyFont: {
          family: "'Inter', sans-serif"
        },
        titleFont: {
          family: "'Inter', sans-serif",
          weight: 'bold'
        }
      }
    },
    scales: type !== ChartType.Pie ? {
      x: {
        grid: {
          color: '#f3f4f6'
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: "'Inter', sans-serif"
          }
        }
      },
      y: {
        grid: {
          color: '#f3f4f6'
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: "'Inter', sans-serif"
          }
        }
      }
    } : {}
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const renderChart = () => {
    const chartProps = {
      data: mergedData,
      options: mergedOptions,
      height,
      ref: chartRef,
      onClick: handleChartClick
    };
    switch (type) {
      case ChartType.Line:
        return <Line {...chartProps} />;
      case ChartType.Bar:
        return <Bar {...chartProps} />;
      case ChartType.Pie:
        return <Pie {...chartProps} />;
      default:
        return <Line {...chartProps} />;
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-card border border-gray-200 p-4 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-gray-900 font-medium text-lg">{title}</h3>
            {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button onClick={handleDownloadPNG} className="px-2 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700">Download PNG</button>
            <button onClick={handleDownloadCSV} className="px-2 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700">Download CSV</button>
          </div>
        </div>
      )}
      <div style={{ height: `${height}px` }}>
        {renderChart()}
      </div>
    </motion.div>
  );
};