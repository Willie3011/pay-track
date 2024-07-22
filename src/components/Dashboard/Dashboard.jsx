import { useEffect, useState } from "react";
import { Table, Button, Stack } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import { useHours } from "../../context/HoursContext";
import AddHoursModal from "../Hours/AddHoursModal/AddHoursModal";

function Dashboard() {
  const { currentUser } = useAuth();
  const { getHours, hours } = useHours();

  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    if (!currentUser) return;
    const unsub = getHours(currentUser.uid);

    return () => unsub;
  }, [currentUser]);

  

  const handleClose = () => setShowModal(false);

  return (
    <div className="mt-2">
      <Stack direction="horizontal" gap={3}>
        <h2
          className="display-6 fw-normal p-2 me-auto"
          style={{ fontSize: "2rem" }}>
          Welcome, {currentUser.displayName}
        </h2>
      </Stack>
      <div className="mt-5">
        <Stack direction="horizontal" gap={2}>
          <Button variant="dark" className="me-auto">
            Filter
          </Button>
          <Button variant="light">View Calendar</Button>
          <Button
            onClick={() => setShowModal(true)}
            variant="light"
            className="p-2 d-flex align-content-center justify-content-center"
            style={{ height: "40px", width: "40px" }}>
            <MdAdd style={{ fontSize: "20px" }} />
          </Button>
        </Stack>
        <Table stripped hover className="mt-2">
          <thead>
            <tr>
              <th width="auto">ID</th>
              <th width="400">Date</th>
              <th width="500">Hours</th>
              <th width="800">Pay per day</th>
              <th width="750">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour.id}>
                <td>{hour.id}</td>
                <td>{hour.date}</td>
                <td className="bg-success">{hour.hours || "-"}</td>
                <td>{"-"}</td>
                <td>
                  <Stack direction="horizontal" gap={2}>
                    <Button variant="outline-dark" className="d-flex btn-sm">
                      <MdEdit />
                    </Button>
                    <Button variant="outline-danger" className="d-flex btn-sm">
                      <MdDelete />
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {showModal && (
        <AddHoursModal
          showModal={showModal}
          onClose={handleClose}
          userId={currentUser.uid}
          existingEntries={hours}
        />
      )}
    </div>
  );
}

export default Dashboard;
