import firebase from 'firebase/app';
import 'firebase/auth';
import staffForm from '../forms/addStaffForm';
import staffCards from '../cards/staffCards';
import staffData from '../../helpers/data/staffData';
// import equipmentData from '../../helpers/data/equipmentData';

const staffView = () => {
  const user = firebase.auth().currentUser;

  if (user) {
    $('#app').html(`
    <div id="addStaffDiv">
    <div id="staffErrorMsg"></div>
    <div id="staffSuccessMsg"></div>
    <button type="button" class="btn btn-outline-dark add-btn" id="addStaffBtn">Add a Staff Member</button>
    </div>`);

    $('#addStaffBtn').on('click', () => {
      staffForm.addStaffForm();
      $('#addStaffBtn').attr('disabled', true);
    });
    staffData.getStaff().then((response) => {
      if (response.length) {
        response.forEach((staff) => {
          $('#cards').append(staffCards.authedStaffCardMaker(staff));
        });
      }
    });
  } else {
    staffData.getStaff().then((response) => {
      if (response.length) {
        response.forEach((staff) => {
          $('#cards').append(staffCards.unauthedStaffMaker(staff));
        });
      }
    });
  }
};

export default { staffView };
