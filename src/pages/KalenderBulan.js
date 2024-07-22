// ./pages/KalenderBulan.js
import React, { useState } from "react";
import { Container, Card, Row, Col, Table, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./KalenderBulan.css"; // Import CSS untuk custom styling

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const KalenderBulan = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInCurrentMonth = daysInMonth(month + 1, year);

  const weeks = [];
  let day = 1;

  for (let i = 0; i < 6; i++) {
    const days = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        days.push(<td key={j}></td>);
      } else if (day > daysInCurrentMonth) {
        days.push(<td key={j}></td>);
      } else {
        const isToday =
          day === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();
        days.push(
          <td key={j} className={isToday ? "bg-warning" : ""}>
            {day}
          </td>
        );
        day++;
      }
    }
    weeks.push(<tr key={i}>{days}</tr>);
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <Container className="pt-4 mt-4">
      <Card>
        <Row className="justify-content-center">
          <Col md={8} className="position-relative">
            <Button
              variant="outline-warning"
              className="prev-btn"
              onClick={handlePrevMonth}
            >
              <FaChevronLeft />
            </Button>
            <Button
              variant="outline-warning"
              className="next-btn"
              onClick={handleNextMonth}
            >
              <FaChevronRight />
            </Button>
            <h2 className="text-center my-4">
              {monthNames[month]} {year}
            </h2>
            <Table bordered className="text-center kalender-table">
              <thead>
                <tr>
                  <th>Minggu</th>
                  <th>Senin</th>
                  <th>Selasa</th>
                  <th>Rabu</th>
                  <th>Kamis</th>
                  <th>Jumat</th>
                  <th>Sabtu</th>
                </tr>
              </thead>
              <tbody>{weeks}</tbody>
            </Table>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default KalenderBulan;
