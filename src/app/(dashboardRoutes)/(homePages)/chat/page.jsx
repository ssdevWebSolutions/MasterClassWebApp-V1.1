'use client'
import React, { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [unreadMessages, setUnreadMessages] = useState({
    "Coach Smith": true,
    "Player Rahul": false,
    "Coach Johnson": true,
    "Player Virat": false,
  });
  const [chatMessages, setChatMessages] = useState({
    "Coach Smith": [
      { sender: "Coach Smith", text: "Hi there! How was your practice session yesterday?", time: "9:15 AM", unread: true },
      { sender: "You", text: "It was great! I worked on my bowling technique as you suggested.", time: "9:18 AM", unread: false },
      { sender: "Coach Smith", text: "Great! Can you send me a video of your current form?", time: "9:22 AM", unread: true },
    ],
    "Player Rahul": [],
    "Coach Johnson": [],
    "Player Virat": [],
  });

  const contacts = [
    { name: "Coach Smith", status: "Online", profileImg: "/images/coach_smith.jpg" },
    { name: "Player Rahul", status: "Online", profileImg: "/images/player_rahul.jpg" },
    { name: "Coach Johnson", status: "Last seen 2h ago", profileImg: "/images/coach_johnson.jpg" },
    { name: "Player Virat", status: "Last seen yesterday", profileImg: "/images/player_virat.jpg" },
  ];

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All"
        ? true
        : activeFilter === "Coaches"
        ? contact.name.toLowerCase().includes("coach")
        : contact.name.toLowerCase().includes("player");
    return matchesSearch && matchesFilter;
  });

  const handleSend = () => {
    if (message.trim() !== "" && selectedContact) {
      const newMessage = {
        sender: "You",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        unread: false,
      };

      setChatMessages((prev) => ({
        ...prev,
        [selectedContact.name]: [...(prev[selectedContact.name] || []), newMessage],
      }));

      setMessage("");
    }
  };

  const handleAttachment = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newMessage = {
        sender: "You",
        text: `Attachment: ${file.name}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        unread: false,
      };

      setChatMessages((prev) => ({
        ...prev,
        [selectedContact.name]: [...(prev[selectedContact.name] || []), newMessage],
      }));
    }
  };

  const handleSticker = (sticker) => {
    const newMessage = {
      sender: "You",
      text: `Sticker: ${sticker}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      unread: false,
    };

    setChatMessages((prev) => ({
      ...prev,
      [selectedContact.name]: [...(prev[selectedContact.name] || []), newMessage],
    }));
  };

  const getRecentMessage = (contactName) => {
    const messages = chatMessages[contactName] || [];
    return messages[messages.length - 1];
  };

  return (
    <div style={styles.container}>
      {/* Contacts */}
      <div style={styles.contacts}>
        <h4 style={styles.sectionTitle}>Coaches & Players</h4>

        <input
          type="text"
          placeholder="Search contacts"
          style={styles.searchBox}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div style={styles.filterTabs}>
          {["All", "Coaches", "Players"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                ...styles.filterButton,
                backgroundColor: activeFilter === filter ? "#007bff" : "#f1f1f1",
                color: activeFilter === filter ? "#fff" : "#000",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <ul style={styles.contactList}>
          {filteredContacts.map((contact, idx) => {
            const recentMessage = getRecentMessage(contact.name);
            return (
              <li
                key={idx}
                style={{
                  ...styles.contactItem,
                  backgroundColor: selectedContact?.name === contact.name ? "#f0f0f0" : "transparent",
                }}
                onClick={() => setSelectedContact(contact)}
              >
                <img
                  src={contact.profileImg}
                  alt={contact.name}
                  style={styles.profileImg}
                />
                <div>
                  <div>{contact.name}</div>
                  <div style={{ fontSize: "12px", color: "gray" }}>
                    {recentMessage ? (
                      <span style={{ fontWeight: unreadMessages[contact.name] ? "bold" : "normal" }}>
                        {recentMessage.text}
                      </span>
                    ) : (
                      "No messages yet"
                    )}
                  </div>
                  <small style={{ color: "gray" }}>{contact.status}</small>
                  {unreadMessages[contact.name] && (
                    <span style={styles.unreadMessage}>New</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Chat Section */}
      <div style={styles.chatSection}>
        {!selectedContact ? (
          <div style={styles.defaultScreen}>
            <h2>Go and chat with your coach to resolve queries!</h2>
            <p>Select a contact from the left to start chatting.</p>
          </div>
        ) : (
          <>
            <div style={styles.chatHeader}>
              <div style={styles.headerInfo}>
                <img
                  src={selectedContact.profileImg}
                  alt={selectedContact.name}
                  style={styles.profileImg}
                />
                <div>
                  <strong>{selectedContact.name}</strong>
                  <div style={{ fontSize: "12px", color: selectedContact.status.includes("Online") ? "green" : "gray" }}>
                    {selectedContact.status}
                  </div>
                </div>
              </div>
              <button
                style={styles.closeButton}
                onClick={() => setSelectedContact(null)}
              >
                Close Chat
              </button>
            </div>

            <div style={styles.chatBody}>
              {(chatMessages[selectedContact.name] || []).map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    ...styles.message,
                    alignSelf: msg.sender === "You" ? "flex-end" : "flex-start",
                    backgroundColor:
                      msg.sender === "You" ? "#007bff" : "#f1f0f0",
                    color: msg.sender === "You" ? "#fff" : "#000",
                    fontWeight: msg.unread ? "bold" : "normal",
                    position: "relative",
                    maxWidth: "70%",
                  }}
                >
                  {msg.text}
                  <div style={styles.time}>{msg.time}</div>
                </div>
              ))}
            </div>

            <div style={styles.inputArea}>
              <input
                type="text"
                placeholder="Type a message..."
                style={styles.input}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={() => document.getElementById("file-input").click()} style={styles.attachmentButton}>
                📎
              </button>
              <input
                id="file-input"
                type="file"
                style={{ display: "none" }}
                onChange={handleAttachment}
              />
              <button onClick={() => handleSticker("😀")} style={styles.stickerButton}>
                😀
              </button>
              <button onClick={handleSend} style={styles.sendButton}>
                ➤
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}




const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
  },
  contacts: {
    flex: "1",
    borderRight: "1px solid #ddd",
    padding: "10px",
    boxSizing: "border-box",
    minWidth: "200px",
    overflowY: "auto",
  },
  sectionTitle: {
    marginBottom: "10px",
  },
  searchBox: {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    boxSizing: "border-box",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f8f8f8",
  },
  filterTabs: {
    display: "flex",
    gap: "5px",
    marginBottom: "10px",
  },
  filterButton: {
    flex: 1,
    padding: "5px 0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
  },
  contactList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },
  profileImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  unreadMessage: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    padding: "2px 5px",
    borderRadius: "5px",
    fontSize: "10px",
    marginLeft: "10px",
  },
  chatSection: {
    flex: "3",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  chatHeader: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  chatBody: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  message: {
    maxWidth: "70%",
    borderRadius: "10px",
    padding: "8px",
    fontSize: "14px",
    position: "relative",
    paddingBottom: "20px",  // Add this line to create space for the time
  },
  time: {
    fontSize: "10px",
    color: "#aaa",
    position: "absolute",
    bottom: "5px",
    right: "10px",
    zIndex: 1,  // Ensure the time is placed above the message content
  },
  
  inputArea: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  sendButton: {
    padding: "5px 10px",
    marginLeft: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  attachmentButton: {
    padding: "5px",
    backgroundColor: "#f1f1f1",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
  },
  stickerButton: {
    padding: "5px",
    backgroundColor: "#f1f1f1",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
  },
  closeButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  defaultScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
  },
};
