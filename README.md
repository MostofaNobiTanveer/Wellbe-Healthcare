# WellBe
#### visit - https://wellbe-react-tw.netlify.app/

This is [WellBe](https://wellbe-react-tw.netlify.app/) where we have built a healthcare system that puts you first. Because nothing is more important than your and your family’s health.

### Our Adjectives

* Wellbe exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more.
* Our goal is to make the process intuitive for our patients and provide care where ever you are – in clinic or at-home.
* We know how daunting getting access to the right care can be which is why we focus on turning a doctor visit into a delightful experience.
* We believe that everyone should have access to convenient, affordable, and high-quality care. We are on a mission to change how healthcare is delivered.

# Application Summery

### Tags

`React` `Tailwind-CSS` `React-router` `Private Route` `Firebase` `Authentication`

### Features

* In this application we have different `routes` to explore
* In Doctors page you will find available `doctors list`
* You can `filter doctors` by their specialty
* From that list you can select a doctor and find more `information` and `schedules` of that doctor
* You have to `Login first` to book an appointment
* You can Signup using `email and password` or using `Gmail`

### App folder structure

```
─src
    ├───components
    │       Banner.js
    │       Brands.js
    │       DocCard.js
    │       Features.js
    │       Header.js
    │       Footer.js
    │       Loader.js
    │       SpecialityList.js
    │       stats.js
    ├───contexts
    │       FetchProvider.js 
    ├───firebase
    │       firebase.config.js
    │       firebase.init.js
    ├───hooks
    │       useFetch.js
    ├───pages
    │   ├───About
    │   │       About.js
    │   ├───Appoinments
    │   │       Appointments.js
    │   │───BookAppointment
    │   │       BookAppointment.js
    │   │───DocInfo
    │   │       DocInfo.js
    │   │───Doctors
    │   │       Doctors.js
    │   │───FAQ
    │   │       FAQ.js
    │   │───Form
    │   │       signin.js
    │   │       signup.js
    │   │───Home
    │   │       Home.js
    │   │───NotFound
    │   │       Notfound.js
    │   │───PrivacyPolicies
    │           PrivacyPolicies.js
    └───utils
            ScrollToTop.js
```