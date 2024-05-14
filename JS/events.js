let current = new Date();

function updateCalendar() {
    const monthAndYear = document.getElementById('monthAndYear');
    monthAndYear.textContent = current.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    const dates = document.getElementById('calendar-body');
    dates.innerHTML = '';

    let today = new Date();
    let firstDay = new Date(current.getFullYear(), current.getMonth(), 1).getDay();
    let daysInMonth = new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate();
    let date = 1;

    // Change events days
    let currentYear = current.getFullYear();
    let currentMonth = current.getMonth();
    
    // Calculate the number of rows needed for the calendar
    let rows = Math.ceil((firstDay + daysInMonth) / 7);

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('td');
            if (i === 0 && j < firstDay) {
                cell.innerHTML = "";
            } else if (date <= daysInMonth) {
                cell.innerHTML = date;
                // Check if this is today's date
                if (current.getFullYear() === today.getFullYear() &&
                    current.getMonth() === today.getMonth() &&
                    date === today.getDate()) {
                    cell.classList.add('highlight');
                } else if (currentYear === 2024 && currentMonth === 4 && (date === 23 || date === 25)) {
                    cell.classList.add('event-date');
                } else if (currentYear === 2024 && currentMonth === 5 && date === 22) {
                    cell.classList.add('event-date');
                }
                date++;
            }
            row.appendChild(cell);
        }
        dates.appendChild(row);
    }
}

document.getElementById('prev-month').addEventListener('click', function() {
    current.setMonth(current.getMonth() - 1);
    updateCalendar();
});

document.getElementById('next-month').addEventListener('click', function() {
    current.setMonth(current.getMonth() + 1);
    updateCalendar();
});

document.addEventListener('DOMContentLoaded', function() {
    updateCalendar();
});
