// ==========================================
// Initial Profile Data
// ==========================================

const initialProfile = {
  name: "Maria Santos",
  program: "BS Information Technology",
  year: "3rd Year",
  status: "active",
  studentId: "2026-001"
};


// ==========================================
// DOM Selection
// ==========================================

// Required getElementById() selections
const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");
const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");

const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");

const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");
const formMessage = document.getElementById("formMessage");

// Required querySelector()
const profileForm = document.querySelector("#profileForm");


// ==========================================
// Utility Functions
// ==========================================

/**
 * Checks whether the student name is valid.
 * A valid name must contain at least 2 trimmed characters.
 */
function isValidStudentName(name) {
  return typeof name === "string" && name.trim().length >= 2;
}


/**
 * Converts the stored status value into display text.
 */
function formatStudentStatus(status) {
  if (status === "active") {
    return "Active";
  }

  if (status === "inactive") {
    return "Inactive";
  }

  return "";
}


// ==========================================
// Status Management
// ==========================================

/**
 * Updates the profile status text, data-status,
 * and active/inactive classes.
 */
function setStatus(status) {
  if (!profileCard || !profileStatus) {
    return;
  }

  profileStatus.textContent = formatStudentStatus(status);

  profileCard.dataset.status = status;

  profileCard.classList.remove("active");
  profileCard.classList.remove("inactive");

  if (status === "active") {
    profileCard.classList.add("active");
  } else if (status === "inactive") {
    profileCard.classList.add("inactive");
  }
}


// ==========================================
// Profile Update
// ==========================================

/**
 * Validates the form and updates the profile.
 */
function updateProfile() {
  if (
    !nameInput ||
    !programInput ||
    !yearInput ||
    !statusInput
  ) {
    return;
  }

  const name = nameInput.value.trim();

  // Validate name before changing the profile
  if (!isValidStudentName(name)) {
    if (formMessage) {
      formMessage.textContent = "Student name is required";
      formMessage.classList.remove("success");
      formMessage.classList.add("error");
    }

    return;
  }

  // Use textContent for all user-controlled values
  if (profileName) {
    profileName.textContent = name;
  }

  if (profileProgram) {
    profileProgram.textContent = programInput.value;
  }

  if (profileYear) {
    profileYear.textContent = yearInput.value;
  }

  setStatus(statusInput.value);

  if (formMessage) {
    formMessage.textContent = "Profile updated successfully.";
    formMessage.classList.remove("error");
    formMessage.classList.add("success");
  }
}


// ==========================================
// Details Toggle
// ==========================================

/**
 * Shows or hides the details panel.
 */
function toggleDetails() {
  if (!detailsPanel) {
    return;
  }

  detailsPanel.classList.toggle("hidden");
}


// ==========================================
// Theme Toggle
// ==========================================

/**
 * Toggles dark theme on the body.
 */
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}


// ==========================================
// Reset
// ==========================================

/**
 * Restores the exact initial profile state.
 */
function resetProfile() {
  if (nameInput) {
    nameInput.value = initialProfile.name;
  }

  if (programInput) {
    programInput.value = initialProfile.program;
  }

  if (yearInput) {
    yearInput.value = initialProfile.year;
  }

  if (statusInput) {
    statusInput.value = initialProfile.status;
  }

  if (profileName) {
    profileName.textContent = initialProfile.name;
  }

  if (profileProgram) {
    profileProgram.textContent = initialProfile.program;
  }

  if (profileYear) {
    profileYear.textContent = initialProfile.year;
  }

  setStatus(initialProfile.status);

  // Read the student ID from the data attribute
  if (profileCard && studentIdDisplay) {
    const studentId = profileCard.dataset.studentId;

    studentIdDisplay.textContent = `Student ID: ${studentId}`;
  }

  // Show details
  if (detailsPanel) {
    detailsPanel.classList.remove("hidden");
  }

  // Remove dark theme
  document.body.classList.remove("dark-theme");

  // Clear message
  if (formMessage) {
    formMessage.textContent = "";
    formMessage.classList.remove("error");
    formMessage.classList.remove("success");
  }
}


// ==========================================
// Event Listeners
// ==========================================

// Prevent the form from reloading the page
if (profileForm) {
  profileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    updateProfile();
  });
}

if (updateBtn) {
  updateBtn.addEventListener("click", function () {
    // The form submit event handles the actual update.
  });
}

if (toggleDetailsBtn) {
  toggleDetailsBtn.addEventListener("click", function () {
    toggleDetails();
  });
}

if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    toggleTheme();
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", function () {
    resetProfile();
  });
}


// ==========================================
// Initial Page Setup
// ==========================================

// Read student ID from data-student-id
if (profileCard && studentIdDisplay) {
  const studentId = profileCard.dataset.studentId;

  studentIdDisplay.textContent = `Student ID: ${studentId}`;
}

// Make sure initial status is Active
setStatus(initialProfile.status);
