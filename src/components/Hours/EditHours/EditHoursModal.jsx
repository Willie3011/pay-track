import { useEffect, useState } from "react";
import { Button, Form, Stack, Tabs, Tab, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useHours } from "../../../context/HoursContext";

function EditHoursModal({ showModal, onClose, userId, editHourId }) {
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    lunch: "",
    hours: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hoursData, setHoursData] = useState([]);
  const { getHourData, editHours } = useHours();

  useEffect(() => {
    async function getData() {
      try {
        const data = await getHourData(userId, editHourId);
        setHoursData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function handleUpdate(e) {
    e.preventDefault();
    setIsLoading(true);
    if (formValues.from != "" && formValues.to != "") {
      const updatedValues = {
        ...formValues,
        type: "workingDay",
        hours: calculateTotalHours(
          formValues.from,
          formValues.to,
          formValues.lunch
        ),
      };

      try {
        await editHours(userId, editHourId, updatedValues);
        setIsLoading(false);
        onClose();
      } catch (err) {
        console.log(err);
      }
    }
    else{
        const updatedValues = {
            ...formValues,
            type:"dayOff"
        }

        try {
            await editHours(userId, editHourId, updatedValues);
            setIsLoading(false);
            onClose();
          } catch (err) {
            console.log(err);
          }
    }
  }

  const renderFromOptions = () => {
    const hours = [];
    for (let i = 5; i <= 11; i++) {
      const hour = i.toString().padStart(2, "0") + ":00";
      hours.push(
        <option key={hour} value={hour}>
          {hour}
        </option>
      );
    }
    return hours;
  };

  const renderToOptions = () => {
    const hours = [];
    for (let i = 12; i <= 21; i++) {
      const hour = i.toString().padStart(2, "0") + ":00";
      hours.push(
        <option key={hour} value={hour}>
          {hour}
        </option>
      );
    }
    return hours;
  };

  const renderLunchHours = () => {
    const lunchOptions = [];
    const intervals = [15, 30, 45, 60, 75, 90]; // intervals in minutes
    intervals.forEach((interval) => {
      const hours = Math.floor(interval / 60);
      const minutes = interval % 60;
      const timeString = `${hours ? hours + " hr " : ""}${
        minutes ? minutes + " min" : ""
      }`;
      lunchOptions.push(
        <option key={interval} value={interval}>
          {timeString}
        </option>
      );
    });
    return lunchOptions;
  };

  const calculateTotalHours = (from, to, lunch) => {
    if (!from || !to) return "-";
    const fromTime = new Date(`1970-01-01T${from}:00`);
    const toTime = new Date(`1970-01-01T${to}:00`);
    let diff = (toTime - fromTime) / (1000 * 60); // difference in minutes
    if (diff < 0) diff += 24 * 60; // handle overnight shifts
    diff -= lunch || 0;
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours}h:${minutes}m`;
  };

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Work Hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={hoursData.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Stack
            direction="horizontal"
            gap={5}
            className="d-flex align-items-center justify-content-between mt-2">
            <Form.Group>
              <Form.Label>From</Form.Label>
              <Form.Select
                name="from"
                value={
                  hoursData.type === "dayOff" ? formValues.from : hoursData.from
                }
                onChange={handleChange}>
                <option>Select Hours</option>
                {renderFromOptions()}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>To</Form.Label>
              <Form.Select
                name="to"
                value={
                  hoursData.type === "dayOff" ? formValues.to : hoursData.to
                }
                onChange={handleChange}>
                <option>Select Hours</option>
                {renderToOptions()}
              </Form.Select>
            </Form.Group>
          </Stack>
          <Form.Group className="mt-2">
            <Form.Label>Lunch Hours</Form.Label>
            <Form.Select
              name="lunch"
              value={
                hoursData.type === "dayOff" ? formValues.lunch : hoursData.lunch
              }
              onChange={handleChange}>
              <option>Select Lunch Hours</option>
              {renderLunchHours()}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="success"
          onClick={handleUpdate}
          disabled={isLoading ? true : false}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditHoursModal;
