<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration Form</title>
      <link rel="stylesheet" type="text/css" href="form.css">
</head>
<body>
    <h3> User Registration Form</h3>
    <form>
      <label for="fname">First Name:</label><br>
      <input type="text" id="fname" name="fname"><br>
      <label for="lname">Last Name:</label><br>
      <input type="text" id="lname" name="lname"><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br>
      <label for="contact">Contact:</label><br>
      <input type="tel" id="contact" name="contact"><br>
      <label for="dob">Date of Birth:</label><br>
      <input type="date" id="date" name="date"><br>
      <label for="age">Age:</label><br>
      <input type="number" id="age" name="age"><br>

      <label for="Gender">Gender</label><br>
      <input type="radio" id="male" name="gender">
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender">
      <label for="female">Female</label>
      <input type="radio" id="other" name="gender">
      <label for="other">Other</label><br>

      <label for="resume">Resume:</label>
      <input type="file" id="resume" name="resume" accept=".pdf"><br>

    <button type ="submit" id="butn"class="btn">Submit</button>
    </form>
    <script src="form.js"></script>
</body>
</html>