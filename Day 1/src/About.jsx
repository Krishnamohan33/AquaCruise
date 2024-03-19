import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
        <p className="text-gray-700">
          AquaCruise CloudBooker is a leading platform for managing boating house reservations. Founded in 20XX, our company aims to simplify the process of booking boating houses and provide exceptional experiences for our users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Team Members</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <img src="team-member-1.jpg" alt="Team Member 1" className="w-full mb-4 rounded-lg" />
            <h3 className="text-lg font-bold">Krishnamohan Y</h3>
            <p className="text-gray-700">Co-Founder & CEO</p>
            <p className="text-gray-700">Krishnamohan is a seasoned entrepreneur with a passion for boating. He co-founded AquaCruise with the vision of revolutionizing the boating house rental industry.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="team-member-2.jpg" alt="Team Member 2" className="w-full mb-4 rounded-lg" />
            <h3 className="text-lg font-bold">Sanjay L K</h3>
            <p className="text-gray-700">Co-Founder & CTO</p>
            <p className="text-gray-700">Sanjayis an experienced software engineer with expertise in building scalable web applications. She leads the technical development of AquaCruise's platform.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="team-member-2.jpg" alt="Team Member 3" className="w-full mb-4 rounded-lg" />
            <h3 className="text-lg font-bold">Mani</h3>
            <p className="text-gray-700">Co-Founder & CTO</p>
            <p className="text-gray-700">Mani is an experienced software engineer with expertise in building scalable web applications. She leads the technical development of AquaCruise's platform.</p>
          </div>
          
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Mission and Values</h2>
        <p className="text-gray-700">
          At AquaCruise CloudBooker, our mission is to provide seamless and memorable experiences for boating enthusiasts worldwide. We are committed to transparency, innovation, and customer satisfaction in everything we do.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Achievements and Milestones</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Reached 100,000 bookings milestone in 20XX</li>
          <li>Winner of the Best Travel Tech Startup Award</li>
          <li>Launched mobile app for iOS and Android platforms</li>
          {/* Add more achievements and milestones here */}
        </ul>
      </section>

      {/* Add sections for Customer Testimonials, Company Culture, Contact Information, FAQs, Social Proof, and Call-to-Action as needed */}
      
    </div>
  );
}

export default About;
