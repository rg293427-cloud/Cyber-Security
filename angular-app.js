var app = angular.module("cyberApp", []);

app.controller("MainController", function ($scope) {

  $scope.siteTitle = "Cybersecurity Explained";

  $scope.heroTitle = "What Is Cyber Security?";
  $scope.heroDesc =
    "Cyber security is the practice of protecting systems, networks and data from digital attacks.";

  $scope.teamMembers = [
    { name: "Manjushri Patil", role: "CEO", image: "images/raj.jpeg" },
    { name: "Nupur Panday", role: "Cyber Lead", image: "team2.jpg" },
    { name: "Sanjana Lakhwani", role: "Security Analyst", image: "team3.jpg" },
    { name: "Priyanka Prajapati", role: "DevSecOps", image: "team4.jpg" },
    { name: "Nisha Jogi", role: "Research Expert", image: "team5.jpg" },
    { name: "Tejaswini Pawar", role: "Ethical Hacker", image: "images/team6.jpg" }
  ];

  $scope.submitForm = function () {
    alert("Thank you! Your message has been sent successfully.");
    $scope.user = {};
  };

});
