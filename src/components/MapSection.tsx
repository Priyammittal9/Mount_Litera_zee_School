const MapSection = () => (
  <section id="map" className="w-full bg-white pt-[70px]">
    <div className="container-fluid mx-auto">
      <div className="relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-lg group">
        <iframe
          title="Mount Litera Zee School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10715.588435150876!2d78.09688946942975!3d26.32978508134643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976b78b22b00ead%3A0x7e5fbb1ebce92023!2sMount%20Litera%20Zee%20School%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1750398509983!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* Overlay for shaded color on hover */}
        
      </div>
    </div>
  </section>
);

export default MapSection;