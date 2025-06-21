import React from 'react';
import { Form, Input, Select, Radio, Button } from 'antd';
import { CheckCircleOutlined, HeartOutlined, BarChartOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function BookDemo() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form submitted:', values);
    // Handle form submission here
  };

  // Responsive helper function
  const getResponsiveStyle = (mobile: any, tablet: any, desktop: any) => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    return isMobile ? mobile : isTablet ? tablet : desktop;
  };

  const pageStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #EBF4FF 0%, #C3DAFE 50%,rgb(81, 177, 247) 100%)',
    padding: getResponsiveStyle('80px 12px 32px', '100px 16px 40px', '120px 16px 48px'),
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const containerStyle = {
    maxWidth: getResponsiveStyle('100%', '768px', '800px'),
    margin: '0 auto',
    padding: getResponsiveStyle('0 4px', '0 8px', '0')
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: getResponsiveStyle('1fr', '1fr', 'repeat(2, 1fr)'),
    gap: getResponsiveStyle('20px', '24px', '25px'),
    marginBottom: getResponsiveStyle('24px', '28px', '32px')
  };

  const valueCardStyle = {
    background: 'white',
    borderRadius: getResponsiveStyle('12px', '14px', '16px'),
    padding: getResponsiveStyle('16px', '17px', '18px'),
    marginBottom: getResponsiveStyle('12px', '13px', '15px'),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
  };

  const valueItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: getResponsiveStyle('10px', '11px', '12px'),
    marginBottom: getResponsiveStyle('12px', '13px', '15px')
  };

  const iconStyle = (bgColor: string) => ({
    width: getResponsiveStyle('26px', '28px', '30px'),
    height: getResponsiveStyle('26px', '28px', '30px'),
    background: bgColor,
    borderRadius: getResponsiveStyle('5px', '5.5px', '6px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: getResponsiveStyle('13px', '14px', '15px'),
    flexShrink: 0
  });

  const testimonialStyle: React.CSSProperties = {
    background: '#0B1D42',
    color: 'white',
    borderRadius: getResponsiveStyle('12px', '14px', '16px'),
    padding: getResponsiveStyle('24px 20px', '28px 22px', '32px 24px'),
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minHeight: getResponsiveStyle('200px', '190px', '180px')
  };

  const formCardStyle = {
    background: 'white',
    borderRadius: getResponsiveStyle('12px', '14px', '16px'),
    padding: getResponsiveStyle('20px', '22px', '24px'),
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
  };

  // Add responsive CSS
  const responsiveCSS = `
    @media (max-width: 767px) {
      .demo-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }
      
      .testimonial-image {
        width: 200px !important;
        margin-top: 20px !important;
        margin-bottom: 15px !important;
      }
      
      .testimonial-quote {
        margin-top: -30px !important;
        margin-left: 5% !important;
        font-size: 18px !important;
      }
      
      .stats-grid {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
        padding: 12px !important;
      }
      
      .stats-number {
        font-size: 16px !important;
      }
      
      .stats-text {
        font-size: 10px !important;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      .demo-grid {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
      }
      
      .testimonial-image {
        width: 250px !important;
        margin-top: 30px !important;
        margin-bottom: 20px !important;
      }
      
      .testimonial-quote {
        margin-top: -40px !important;
        margin-left: 8% !important;
        font-size: 20px !important;
      }
      
      .stats-grid {
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 14px !important;
        padding: 14px !important;
      }
    }
  `;

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = responsiveCSS;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Main grid */}
        <div style={gridStyle} className="demo-grid">
          
          {/* Left Side */}
          <div>
            {/* Value Proposition Card */}
            <div style={valueCardStyle}>
              <h1 style={{ 
                fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                fontWeight: '600', 
                color: '#1F2937', 
                marginBottom: getResponsiveStyle('12px', '13px', '15px'),
                lineHeight: '1.5'
              }}>
                Take the guesswork out of hiring with our intelligent interview assistant.
              </h1>
              
              <div>
                <div style={valueItemStyle}>
                  <div style={iconStyle('linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)')}>
                    ⏱️
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#1F2937', 
                      marginBottom: '3px', 
                      fontSize: getResponsiveStyle('12px', '12.5px', '13px')
                    }}>
                      No more note-taking.
                    </div>
                    <div style={{ 
                      color: '#6B7280', 
                      fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                      lineHeight: '1.5' 
                    }}>
                      Clarivue captures everything — you stay focused.
                    </div>
                  </div>
                </div>
                
                <div style={valueItemStyle}>
                  <div style={iconStyle('linear-gradient(135deg, #EC4899 0%, #BE185D 100%)')}>
                    👁️
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#1F2937', 
                      marginBottom: '3px', 
                      fontSize: getResponsiveStyle('12px', '12.5px', '13px')
                    }}>
                      Ask better questions.
                    </div>
                    <div style={{ 
                      color: '#6B7280', 
                      fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                      lineHeight: '1.5' 
                    }}>
                      Real-time cues and follow-ups, right when you need them.
                    </div>
                  </div>
                </div>
                
                <div style={valueItemStyle}>
                  <div style={iconStyle('linear-gradient(135deg, #10B981 0%, #047857 100%)')}>
                    📊
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#1F2937', 
                      marginBottom: '3px', 
                      fontSize: getResponsiveStyle('12px', '12.5px', '13px')
                    }}>
                      Decide with confidence.
                    </div>
                    <div style={{ 
                      color: '#6B7280', 
                      fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                      lineHeight: '1.5' 
                    }}>
                      Instant scoring and insights to hire the best, faster.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div style={testimonialStyle}>
              {/* Main image area - centered portrait without circular crop */}
              <div style={{ 
                flex: 1,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginTop: getResponsiveStyle('25px', '35px', '45px'),
                marginBottom: getResponsiveStyle('15px', '20px', '25px')
              }}>
                <img 
                  src="/chrissy-moore.png"
                  alt="Chrissy Moore"
                  className="testimonial-image"
                  style={{ 
                    width: getResponsiveStyle('220px', '260px', '300px'), 
                    height: 'auto', 
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    zIndex: 5,
                    position: 'relative'
                  }}
                />
              </div>
              
              {/* Quote section at bottom */}
              <div style={{ 
                position: 'relative', 
                zIndex: 10, 
                textAlign: 'left',
                marginTop: getResponsiveStyle('-40px', '-50px', '-60px'),
                marginLeft: getResponsiveStyle('8%', '9%', '10%')
              }}>
                <blockquote 
                  className="testimonial-quote"
                  style={{ 
                    fontSize: getResponsiveStyle('20px', '22px', '24px'), 
                    fontWeight: '700', 
                    marginBottom: getResponsiveStyle('18px', '21px', '24px'), 
                    lineHeight: '1.3',
                    color: 'white',
                    margin: '0 0 24px 0'
                  }}
                >
                  "We're hiring faster, more confidently, and with less effort."
                </blockquote>
                
                {/* Attribution */}
                <div>
                  <div style={{ 
                    fontWeight: '700', 
                    fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                    color: 'white',
                    marginBottom: '4px'
                  }}>
                    Chrissy Moore
                  </div>
                  <div style={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: getResponsiveStyle('14px', '15px', '16px'),
                    fontWeight: '400'
                  }}>
                    Head of Talent Acquisition
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Booking Form */}
          <div style={formCardStyle}>
            <h3 style={{ 
              fontSize: getResponsiveStyle('18px', '19px', '20px'), 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: getResponsiveStyle('20px', '22px', '24px')
            }}>
              Book a demo
            </h3>
            
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="Name*"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input 
                  placeholder="Your name" 
                  style={{ 
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'), 
                    height: getResponsiveStyle('38px', '39px', '40px'),
                    fontSize: getResponsiveStyle('14px', '15px', '16px')
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Select 
                  placeholder="— Please select —" 
                  style={{ 
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'), 
                    height: getResponsiveStyle('38px', '39px', '40px')
                  }}
                >
                  <Option value="work">Work Email</Option>
                  <Option value="personal">Personal Email</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Role"
                name="role"
                rules={[{ required: true, message: 'Please select your role' }]}
              >
                <Select 
                  placeholder="— Please select —" 
                  style={{ 
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'), 
                    height: getResponsiveStyle('38px', '39px', '40px')
                  }}
                >
                  <Option value="recruiter">Recruiter</Option>
                  <Option value="hiring-manager">Hiring Manager</Option>
                  <Option value="hr-director">HR Director</Option>
                  <Option value="talent-acquisition">Talent Acquisition</Option>
                  <Option value="ceo">CEO</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Company size"
                name="companySize"
                rules={[{ required: true, message: 'Please select company size' }]}
              >
                <Radio.Group style={{ width: '100%' }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: getResponsiveStyle('6px', '7px', '8px'),
                    alignItems: 'flex-start'
                  }}>
                    <Radio.Button value="small" style={{ 
                      textAlign: 'left', 
                      width: 'auto',
                      minWidth: 'fit-content',
                      padding: getResponsiveStyle('0 12px', '0 14px', '0 16px'),
                      fontSize: getResponsiveStyle('13px', '14px', '15px')
                    }}>
                      &lt; 100
                    </Radio.Button>
                    <Radio.Button value="medium" style={{ 
                      textAlign: 'left', 
                      width: 'auto',
                      minWidth: 'fit-content',
                      padding: getResponsiveStyle('0 12px', '0 14px', '0 16px'),
                      fontSize: getResponsiveStyle('13px', '14px', '15px')
                    }}>
                      100 to 500
                    </Radio.Button>
                    <Radio.Button value="large" style={{ 
                      textAlign: 'left', 
                      width: 'auto',
                      minWidth: 'fit-content',
                      padding: getResponsiveStyle('0 12px', '0 14px', '0 16px'),
                      fontSize: getResponsiveStyle('13px', '14px', '15px')
                    }}>
                      500+
                    </Radio.Button>
                  </div>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="How did you hear about us?"
                name="referralSource"
              >
                <Input 
                  placeholder="Optional" 
                  style={{ 
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'), 
                    height: getResponsiveStyle('38px', '39px', '40px'),
                    fontSize: getResponsiveStyle('14px', '15px', '16px')
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: '100%',
                    height: getResponsiveStyle('44px', '46px', '48px'),
                    background: 'linear-gradient(135deg, #1E2A78 0%, #5F9DF7 100%)',
                    border: 'none',
                    borderRadius: getResponsiveStyle('6px', '7px', '8px'),
                    fontSize: getResponsiveStyle('14px', '15px', '16px'),
                    fontWeight: '600',
                    boxShadow: '0 4px 12px rgba(31, 42, 120, 0.3)',
                    marginBottom: getResponsiveStyle('24px', '28px', '32px')
                  }}
                >
                  Pick a time
                </Button>
                
                {/* Stats Bar */}
                <div 
                  className="stats-grid"
                  style={{
                    background: 'linear-gradient(135deg, #8BE6A8, #7AC4E8)',
                    borderRadius: getResponsiveStyle('10px', '11px', '12px'),
                    padding: getResponsiveStyle('14px', '15px', '16px'),
                    display: 'grid',
                    gridTemplateColumns: getResponsiveStyle('1fr', 'repeat(3, 1fr)', 'repeat(3, 1fr)'),
                    gap: getResponsiveStyle('12px', '14px', '16px'),
                    color: '#2D3748'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div 
                      className="stats-number"
                      style={{ 
                        fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                        fontWeight: '700', 
                        marginBottom: '4px' 
                      }}
                    >
                      6-10 hrs
                    </div>
                    <div 
                      className="stats-text"
                      style={{ 
                        fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                        opacity: 0.9, 
                        lineHeight: '1.3' 
                      }}
                    >
                      Average time recruiters save per week.
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div 
                      className="stats-number"
                      style={{ 
                        fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                        fontWeight: '700', 
                        marginBottom: '4px' 
                      }}
                    >
                      91%
                    </div>
                    <div 
                      className="stats-text"
                      style={{ 
                        fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                        opacity: 0.9, 
                        lineHeight: '1.3' 
                      }}
                    >
                      Satisfaction with interviewers and hiring managers.
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div 
                      className="stats-number"
                      style={{ 
                        fontSize: getResponsiveStyle('16px', '17px', '18px'), 
                        fontWeight: '700', 
                        marginBottom: '4px' 
                      }}
                    >
                      28%
                    </div>
                    <div 
                      className="stats-text"
                      style={{ 
                        fontSize: getResponsiveStyle('10px', '10.5px', '11px'), 
                        opacity: 0.9, 
                        lineHeight: '1.3' 
                      }}
                    >
                      Fewer interviews per hire.
                    </div>
                  </div>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
} 