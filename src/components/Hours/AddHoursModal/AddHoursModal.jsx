import { useState } from "react";
import { Button, Form, Stack, Tabs, Tab, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useHours } from "../../../context/HoursContext";

function AddHoursModal({ showModal, onClose, userId, existingEntries }) {
  const [formValues, setFormValues] = useState({
    date: "",
    from: "",
    to: "",
    lunch: "",
    hours: "",
  });

  const { addHours } = useHours();
  const [entries, setEntries] = useState([]);
  const [key, setKey] = useState("workingDay");
  const [isLoading, setIsLoading] = useState(false);
  
  
  const handleAddEntry = () => {
    if (formValues.date) {
      const newEntries = [...entries, { ...formValues, type: key }];
      newEntries.sort((a, b) => new Date(a.date) - new Date(b.date));

      if (formValues.from && formValues.to) {
        setEntries((prevEntries) => [
          ...prevEntries,
          {
            ...formValues,
            type: key,
            hours: calculateTotalHours(
              formValues.from,
              formValues.to,
              formValues.lunch
            ),
          },
        ]);
      } else {
        setEntries((prevEntries) => [
          ...prevEntries,
          {
            ...formValues,
            type: key,
          }
        ]);
      }
      setFormValues({ date: "", from: "", to: "", lunch: "" });
    }
  };

  function removeDuplicates(newEntries, existingEntries){
    return newEntries.filter(newEntry => {
      return !existingEntries.some(existingEntry =>{
        return (existingEntry.date === newEntry.date)
      })
    })
  }
  
  const handleDeleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function handleSave(e) {
    e.preventDefault();

    setIsLoading(true);
    const filteredEntries = removeDuplicates(entries, existingEntries);
    for (const entry of filteredEntries) {
      try{
        await addHours(userId, entry);
      }
      catch(err) {
        console.log(err)
      }
    }
    setEntries([]);
    setIsLoading(false);
    onClose();
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
        <Modal.Title>Add Work Hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="workingDay" title="Working Day">
            <Form>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formValues.date}
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
                    value={formValues.from}
                    onChange={handleChange}>
                    <option>Select Hours</option>
                    {renderFromOptions()}
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>To</Form.Label>
                  <Form.Select
                    name="to"
                    value={formValues.to}
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
                  value={formValues.lunch}
                  onChange={handleChange}>
                  <option>Select Lunch Hours</option>
                  {renderLunchHours()}
                </Form.Select>
              </Form.Group>
              <Button variant="dark" className="mt-3" onClick={handleAddEntry}>
                Add Working Day
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="dayOff" title="Day Off">
            <Form>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  name="date"
                  type="date"
                  value={formValues.date}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="dark" className="mt-3" onClick={handleAddEntry}>
                Add Day Off
              </Button>
            </Form>
          </Tab>
        </Tabs>
        <Table striped="true" hover className="mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th>Lunch</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.from || "-"}</td>
                <td>{entry.to || "-"}</td>
                <td>
                  {entry.lunch
                    ? `${Math.floor(entry.lunch / 60)}h:${entry.lunch % 60}m`
                    : "-"}
                </td>
                <td>{entry.type === "workingDay" ? entry.hours : "-"}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteEntry(index)}>
                    &times;
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSave} disabled={isLoading ? true : false}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddHoursModal;
