<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "About",
  data(){
    return {
      stat: 50
    }
  }
})
</script>

<template>
  <Header />
  <SubHeader title="About us" subtitle="Learn more about our mission and values" />

  {/* Mission Section */}
  <section class="about-mission">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <span class="about-label">{{$t('about.priestAbout.whoWeAre')}}Who we are</span>
          <h2 class="about-heading">{{$t('about.priestAbout.commited.')}}Committed to providing exceptional healthcare</h2>
          <p class="about-text">
            {{$t('about.priestAbout.weAreATeam')}}We are a team of dedicated healthcare professionals committed to providing compassionate,
            patient-centered care. With over 15 years of experience, we combine medical excellence
            with genuine care for each patient's wellbeing.
          </p>
          <p class="about-text">
            {{$t('about.priestAbout.ourStateOfTheArt')}}
            Our state-of-the-art facility offers comprehensive medical services, from preventive care
            to specialized treatments, all delivered by experienced doctors who truly care about your health.
          </p>
          <div class="about-features">
            {{$t('about.priestAbout.aboutFeatures')}}{['Board-certified physicians', 'Modern equipment', '24/7 Emergency care', 'Patient-focused approach'].map((feature, index) => (
            <div class="about-feature-item" key={index}>
              <FaCheckCircle class="about-feature-icon" />
              <span>{feature}</span>
            </div>
            ))}
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-image-grid">
            <div class="about-image-main">
              <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600" alt="Healthcare" class="img-fluid" />
            </div>
            <div class="about-image-side">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400" alt="Medical team" class="img-fluid" />
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400" alt="Healthcare" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section class="about-stats">
    <div class="container">
      <div class="row g-4">
        {stats.map((stat, index) => (
        <div class="col-sm-6 col-lg-3" key={index}>
          <div class="about-stat-card">
            <div class="about-stat-icon">{stat.icon}</div>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>

  {/* Values Section */}
  <section class="about-values">
    <div class="container">
      <div class="text-center mb-5">
        <span class="about-label">{{$t('about.priestAbout.ourValues')}}Our values</span>
        <h2 class="about-heading">{{$t('about.priestAbout.whatDrivesUs')}}What drives us</h2>
        <p class="about-lead">{{$t('about.priestAbout.thePrinciples')}}The principles that guide everything we do</p>
      </div>
      <div class="row g-4">
        {values.map((value, index) => (
        <div class="col-lg-4" key={index}>
          <div class="about-value-card">
            <div class="about-value-icon">{value.icon}</div>
            <h4>{value.title}</h4>
            <p>{value.description}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>

  {/* Team Section */}
  <section class="about-team">
    <div class="container">
      <div class="text-center mb-5">
        <span class="about-label">{{$t('about.priestAbout.ourTeam')}}Our team</span>
        <h2 class="about-heading">{{$t('about.priestAbout.meetOurSpecialists')}}Meet our specialists</h2>
        <p class="about-lead">{{$t('about.priestAbout.experiencedProfessionals')}}Experienced professionals dedicated to your health</p>
      </div>
      <div class="row justify-content-center">
        {doctorContent}
      </div>
      <div class="text-center mt-4">
        <Link to="/doctors" class="about-cta-btn">{{$t('about.priestAbout.viewAllDoctors')}}View all doctors</Link>
      </div>
    </div>
  </section>

  <Footer />
</template>

<style scoped lang="postcss">

</style>
