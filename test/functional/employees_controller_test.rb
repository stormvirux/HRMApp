require 'test_helper'

class EmployeesControllerTest < ActionController::TestCase
  setup do
    @employee = employees(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:employees)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create employee" do
    assert_difference('Employee.count') do
      post :create, employee: { Marstatus: @employee.Marstatus, civstatus: @employee.civstatus, department: @employee.department, designation: @employee.designation, dob: @employee.dob, email: @employee.email, empno: @employee.empno, exp: @employee.exp, first_name: @employee.first_name, gender: @employee.gender, iedate: @employee.iedate, iidate: @employee.iidate, insuranceno: @employee.insuranceno, iqamano: @employee.iqamano, iqedate: @employee.iqedate, iqidate: @employee.iqidate, last_name: @employee.last_name, middle_name: @employee.middle_name, nationality: @employee.nationality, passportno: @employee.passportno, pedate: @employee.pedate, pidate: @employee.pidate, religion: @employee.religion, speciali: @employee.speciali, vedate: @employee.vedate, vidate: @employee.vidate, visano: @employee.visano }
    end

    assert_redirected_to employee_path(assigns(:employee))
  end

  test "should show employee" do
    get :show, id: @employee
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @employee
    assert_response :success
  end

  test "should update employee" do
    put :update, id: @employee, employee: { Marstatus: @employee.Marstatus, civstatus: @employee.civstatus, department: @employee.department, designation: @employee.designation, dob: @employee.dob, email: @employee.email, empno: @employee.empno, exp: @employee.exp, first_name: @employee.first_name, gender: @employee.gender, iedate: @employee.iedate, iidate: @employee.iidate, insuranceno: @employee.insuranceno, iqamano: @employee.iqamano, iqedate: @employee.iqedate, iqidate: @employee.iqidate, last_name: @employee.last_name, middle_name: @employee.middle_name, nationality: @employee.nationality, passportno: @employee.passportno, pedate: @employee.pedate, pidate: @employee.pidate, religion: @employee.religion, speciali: @employee.speciali, vedate: @employee.vedate, vidate: @employee.vidate, visano: @employee.visano }
    assert_redirected_to employee_path(assigns(:employee))
  end

  test "should destroy employee" do
    assert_difference('Employee.count', -1) do
      delete :destroy, id: @employee
    end

    assert_redirected_to employees_path
  end
end
