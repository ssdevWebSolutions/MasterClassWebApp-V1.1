const CardsSection = () => {
    const cards = [
      {
        title: "Calendar View",
        description: "See your workout schedule clearly.",
      },
      {
        title: "Weekly Progress",
        description: "Track your weekly achievements.",
      },
      {
        title: "Next Workout",
        description: "Preview your upcoming session.",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {cards.map((card, index) => (
          <div key={index} className="p-6 rounded-2xl shadow-md border hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-500">{card.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardsSection;
  