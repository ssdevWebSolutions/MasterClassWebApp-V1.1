"use client"
import React, { useState } from 'react';

const dummyOrders = [
  { id: 'ORD001', product: 'Protein Pack', price: 1299, date: '2025-04-01', status: 'Delivered' },
  { id: 'ORD002', product: 'Vitamin D3', price: 699, date: '2025-04-02', status: 'Processing' },
  { id: 'ORD003', product: 'Omega 3', price: 899, date: '2025-04-03', status: 'Cancelled' },
  { id: 'ORD004', product: 'Muscle Gainer', price: 1599, date: '2025-04-05', status: 'Delivered' },
  { id: 'ORD005', product: 'BCAA', price: 749, date: '2025-04-06', status: 'Processing' },
  { id: 'ORD006', product: 'Electrolyte Drink', price: 599, date: '2025-04-07', status: 'Delivered' },
  { id: 'ORD007', product: 'Whey Protein', price: 1299, date: '2025-04-09', status: 'Cancelled' },
  { id: 'ORD008', product: 'Zinc Supplement', price: 499, date: '2025-04-10', status: 'Delivered' },
  { id: 'ORD009', product: 'Pre-Workout', price: 1099, date: '2025-04-11', status: 'Processing' },
  { id: 'ORD010', product: 'Post-Workout', price: 1199, date: '2025-04-12', status: 'Delivered' },
];

const OrdersPerPage = 4;

const CancelledOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyOrders.length / OrdersPerPage);

  const paginatedOrders = dummyOrders.slice(
    (currentPage - 1) * OrdersPerPage,
    currentPage * OrdersPerPage
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return <span style={{ color: 'green', fontWeight: 600 }}>✓ Delivered</span>;
      case 'Processing':
        return <span style={{ color: '#f5a623', fontWeight: 600 }}>⏳ Processing</span>;
      case 'Cancelled':
        return <span style={{ color: 'red', fontWeight: 600 }}>✘ Cancelled</span>;
      default:
        return status;
    }
  };

    return (
        <div>
          <h2>Cancelled Orders</h2>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Product</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order) => (
                <tr key={order.id}>
                  <td data-label="Order">{order.id}</td>
                  <td data-label="Product">{order.product}</td>
                  <td data-label="Price">₹{order.price}</td>
                  <td data-label="Date">{order.date}</td>
                  <td data-label="Status">{getStatusBadge(order.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
      
          {/* Footer with info and pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
            <div>
              Showing {(currentPage - 1) * OrdersPerPage + 1} to{' '}
              {Math.min(currentPage * OrdersPerPage, dummyOrders.length)} of {dummyOrders.length} orders
            </div>
      
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={currentPage === i + 1 ? 'active' : ''}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
      
};

export default CancelledOrders;
