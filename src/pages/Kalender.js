import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Spinner } from "react-bootstrap";
import KalenderBulan from "./KalenderBulan";

const HijriCalendar = () => {
  const [hijriDate, setHijriDate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHijriDate = async () => {
      try {
        const response = await axios.get(
          "http://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=2"
        );
        console.log("API response:", response); // Debug response
        setHijriDate(response.data.data.date.hijri);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Hijri date:", error);
        setLoading(false);
      }
    };

    fetchHijriDate();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="my-5 py-4">
      <Card>
        <Card.Body>
          <Card.Title>Tanggal Hijri Saat Ini</Card.Title>
          {hijriDate ? (
            <div>
              <p>
                {hijriDate.day} {hijriDate.month.en} ({hijriDate.month.ar}){" "}
                {hijriDate.year} {hijriDate.designation.expanded}
              </p>
            </div>
          ) : (
            <p>Tanggal Hijri tidak tersedia.</p>
          )}
        </Card.Body>
      </Card>
      <KalenderBulan />
    </Container>
  );
};

export default HijriCalendar;
