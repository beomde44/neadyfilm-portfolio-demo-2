"use client";

export default function FilterTabs({ buttons, activeFilter, onChange, label }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`filter-button ${activeFilter === button.id ? "active" : ""}`}
          type="button"
          onClick={() => onChange(button.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
