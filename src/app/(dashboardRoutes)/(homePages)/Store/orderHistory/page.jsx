"use client"
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

import '../../../../assets/css/orderHistory.css';
import AllOrders from './AllOrders';
import DeliveredOrders from './DeliveredOrders';
import ProcessingOrders from './ProcessingOrders';
import CancelledOrders from './CancelledOrders';
import { Search } from 'lucide-react';

const OrderHistory = () => {
  return (

    <div className="order-history-container">
      <h1>Order History</h1>
      <div className="search-filter-container">
        <div className="search-input-wrapper">
          <span className="search-icon"><Search size={18} /></span>
          <input
            type="text"
            className="search-input"
            placeholder="Order #, product name..."
          />
        </div>
        <button className="filter-button">Filter Orders</button>
      </div>
      <Tabs.Root className="tabs-root" defaultValue="all">
        <Tabs.List className="tabs-list">
          <Tabs.Trigger className="tabs-trigger" value="all">All Orders</Tabs.Trigger>
          <Tabs.Trigger className="tabs-trigger" value="delivered">Delivered</Tabs.Trigger>
          <Tabs.Trigger className="tabs-trigger" value="processing">Processing</Tabs.Trigger>
          <Tabs.Trigger className="tabs-trigger" value="cancelled">Cancelled</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="tabs-content" value="all">
          <AllOrders />
        </Tabs.Content>
        <Tabs.Content className="tabs-content" value="delivered">
          <DeliveredOrders />
        </Tabs.Content>
        <Tabs.Content className="tabs-content" value="processing">
          <ProcessingOrders />
        </Tabs.Content>
        <Tabs.Content className="tabs-content" value="cancelled">
          <CancelledOrders />
        </Tabs.Content>
      </Tabs.Root>
      <section className="helping">

        <div className="help-box card">
          <h2>Need Help?</h2>

          <p>Contact our support team for any questions about your orders or returns.</p>
          <div className="buttons">
            <button className="btn contactSupport">Contact Support</button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderHistory;
