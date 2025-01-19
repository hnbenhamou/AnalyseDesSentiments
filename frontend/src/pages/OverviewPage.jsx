import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import OverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import ChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Posts"
            icon={Zap}
            value={stats.totalPosts}
            color="#6366F1"
          />
          <StatCard
            name="Countries"
            icon={Users}
            value={stats.countries}
            color="#8B5CF6"
          />
          <StatCard
            name="Positive Posts"
            icon={ShoppingBag}
            value={stats.positivePosts}
            color="#EC4899"
          />
          <StatCard
            name="Negative Posts"
            icon={BarChart2}
            value={stats.negativePosts}
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <OverviewChart data={stats.overviewChartData} />
          <CategoryDistributionChart data={stats.categoryDistributionData} />
          <ChannelChart data={stats.channelData} />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
