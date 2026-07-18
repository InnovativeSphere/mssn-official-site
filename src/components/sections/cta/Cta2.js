'use client';
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta2 = () => {
  return (
    <section className="tj-cta-section h7-cta section-gap-x" style={{ backgroundColor: "#1B3A6B", position: "relative" }}>
      <style jsx global>{`
        .tj-cta-section .cta-content .title {
          color: #ffffff !important;
        }
        .tj-cta-section .tj-primary-btn {
          background-color: #29B6D8 !important;
          border-color: #29B6D8 !important;
          color: #1B3A6B !important;
        }
        .tj-cta-section .tj-primary-btn:hover {
          background-color: #ffffff !important;
          border-color: #ffffff !important;
          color: #1B3A6B !important;
        }
      `}</style>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="cta-area h7-cta-inner" style={{ textAlign: "center", padding: "60px 20px" }}>
                    <div className="cta-content">
                      <h2 className="title text-anim" style={{ marginBottom: "30px" }}>
                        Need Help? Chat with Our Support Team
                      </h2>
                      <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                        <ButtonPrimary
                          text={"Contact Support →"}
                          url={"/contact"}
                          className={"tj-primary-btn-lg"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-3">
        <img src="/images/shape/shape-blur.svg" alt="" />
      </div>
    </section>
  );
};

export default Cta2;