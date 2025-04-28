import React from 'react';
import '../../../../assets/css/cricketPerformanceDiet.css';
import * as Tabs from '@radix-ui/react-tabs';
import MatchDay from './MatchDay';


// import MatchDay from './MatchDay';
// import TrainingDay from './TrainingDay';
// import RecoveryDay from './RecoveryDay';

const CricketPerformanceDiet = () => {
  return (
    <div className="diet-container">
      {/* <nav className="breadcrumb">
        <span>Dashboard</span> &gt; <span>Nutrition</span> &gt; <span className="active">Cricket Performance Diet</span>
      </nav> */}

      <h1 className="title">Cricket Performance Diet</h1>

      <div className="hero-image">
        <img src="" alt="Cricket Diet Meal" />
      </div>

      <section className="plan-overview">
        <h2>Plan Overview</h2>
        <p>
          This 7-day meal plan is specifically designed for cricket players to optimize performance during training and match days.
          The plan focuses on proper carbohydrate timing, protein distribution, and hydration strategies to enhance energy levels,
          recovery, and overall performance on the field.
        </p>
      </section>

      <section className="key-benefits">
        <h2>Key Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>⚡ Energy</h3>
            <p>Optimized carb intake for sustained energy during long matches</p>
          </div>
          <div className="benefit-card">
            <h3>💪 Recovery</h3>
            <p>Strategic protein timing to enhance muscle recovery between sessions</p>
          </div>
          <div className="benefit-card">
            <h3>💧 Hydration</h3>
            <p>Fluid and electrolyte balance for peak performance in all conditions</p>
          </div>
          <div className="benefit-card">
            <h3>🧠 Focus</h3>
            <p>Brain-boosting nutrients to maintain concentration during play</p>
          </div>
        </div>
      </section>

      <section className="diet-tabs">
        <Tabs.Root className="TabsRoot" defaultValue="match">
          <Tabs.List className="TabsList" aria-label="Diet Tabs">
            <Tabs.Trigger className="TabsTrigger" value="match">
              Match Day
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="training">
              Training Day
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="recovery">
              Recovery Day
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="TabsContent" value="match">
            <MatchDay/>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="training">
            <p>Training Day</p>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="recovery">
            <p>Recovery Day</p>
          </Tabs.Content>
        </Tabs.Root>
      </section>
    </div>
  );
};

export default CricketPerformanceDiet;
