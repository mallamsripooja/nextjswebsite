import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surmandal | Contact",
  description: "Surmandal team's contact details.",
};

const ContactPage = () => {
  return (
    <>
      <section className="container mx-auto px-16 py-20 space-y-24 bg-gradient-to-b from-yellow-50 to-yellow-200">
        {/* Present Committee Members */}
        <div className="text-center">
          <h2 className="text-3xl pb-8 font-bold text-primary">Surmandal&apos;s Core Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="flex flex-col items-center">    
              <Image 
                src="/images/about/siddharthji.jpg" 
                width={120} 
                height={120} 
                alt="Secretary's Image" 
                className="rounded-full shadow-md object-cover"
              />
              <h3 className="text-2xl font-medium text-primary mt-4">Siddharth Mohan Hemmadi</h3>
              <p className="text-xl font-medium text-primary">President</p>
              <p className="text-xl font-medium text-primary flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg> &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
                &nbsp; +91-9966033333
              </p>
            </div>
            <div className="flex flex-col items-center">     
              <Image 
                src="/images/about/nageshji.jpg" 
                width={120} 
                height={120} 
                alt="Secretary's Image" 
                className="rounded-full shadow-md object-cover"
              />
              <h3 className="text-2xl font-medium text-primary mt-4">Nagesh Kapilavai</h3>
              <p className="text-xl font-medium text-primary">Secretary</p>
              <p className="text-xl font-medium text-primary flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg> &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
                &nbsp; +91-9963560007
              </p>
            </div>
          </div>
        </div>
        
        {/* Legacy of Surmandal & Contact Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-top">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Legacy of Surmandal</h2>
            <div className="mt-8 flex justify-center">
              <iframe
                className="rounded-lg shadow-xl"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/MemsaEOPhGw"
                title="Legacy of Surmandal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
            <div className="mt-8 flex justify-center">
              <iframe
                className="rounded-lg shadow-xl"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.193366940694!2d78.4722156!3d17.4025055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97608b218935%3A0xe4719931bae31967!2sKrishna%20Residency!5e0!3m2!1sen!2sin!4v1743423613691!5m2!1sen!2sin"
              ></iframe>
            </div>
            <p className="mt-6 text-primary font-medium">
              Address:
              <br></br> 
              Flat No. 404, Krishna Residency, 5-10-187/3, Hill Fort Road, Hyd - 500004
            </p>
            <p className="mt-3 text-primary font-medium">
              E-mail:
              <br></br> 
              <a href="mailto:surmandalregd@gmail.com" className="text-primary">
                surmandalregd@gmail.com
              </a>
              <br></br>
              <a href="mailto:surmandalhyderabad@gmail.com" className="text-primary font-medium">surmandalhyderabad@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
