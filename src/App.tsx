// src/App.tsx

import Header from './components/Header';
import CreateInvoiceCard from './components/CreateInvoiceCard';
import TimePeriodSelector from './components/TimePeriodSelector';
import EarningsSummary from './components/EarningsSummary';
import IncomeTrendChart from './components/IncomeTrendChart';
import InvoiceList from './components/InvoiceList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen  font-sans">
      <Header />
      <main className="container mx-auto p-4 space-y-4 max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <CreateInvoiceCard />
        <TimePeriodSelector />
        <EarningsSummary />
        <IncomeTrendChart />
        <InvoiceList />
      </main>
      <Footer />
    </div>
  );
}

export default App;