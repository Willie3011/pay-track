import Table  from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Stack } from "react-bootstrap";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  console.log(currentUser);
  function Logout() {
    try {
      logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mt-2">
      <Stack direction="horizontal" gap={3}>
        <h2
          className="display-6 fw-normal p-2 me-auto"
          style={{ fontSize: "2rem" }}>
          Your Hours
        </h2>
        <Button variant="dark" className="p-2 fw-bold btn-sm">
          Add Hours
        </Button>
      </Stack>
      <div className="mt-5">
        <Table stripped className="bg-light">
          <thead>
            <tr>
              <th width="auto">ID</th>
              <th width="1000">Date</th>
              <th width="500">Hours</th>
              <th width="800">Pay per day</th>
              <th width="750">Actions</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
          <tfoot className="d-flex align-items-center">
            No data
          </tfoot>
            
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
