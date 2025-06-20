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

  const pageStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #EBF4FF 0%, #C3DAFE 50%,rgb(81, 177, 247) 100%)',
    padding: '120px 16px 48px',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '25px',
    marginBottom: '32px'
  };

  const valueCardStyle = {
    background: 'white',
    borderRadius: '16px',
    padding: '18px',
    marginBottom: '15px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
  };

  const valueItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '15px'
  };

  const iconStyle = (bgColor: string) => ({
    width: '30px',
    height: '30px',
    background: bgColor,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    flexShrink: 0
  });

  const testimonialStyle: React.CSSProperties = {
    background: '#0B1D42',
    color: 'white',
    borderRadius: '16px',
    padding: '32px 24px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '180px'
  };

  const formCardStyle = {
    background: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Main 2-column grid */}
        <div style={gridStyle}>
          
          {/* Left Side */}
          <div>
            {/* Value Proposition Card */}
            <div style={valueCardStyle}>
              <h1 style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                color: '#1F2937', 
                marginBottom: '15px',
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
                    <div style={{ fontWeight: '600', color: '#1F2937', marginBottom: '3px', fontSize: '13px' }}>
                      No more note-taking.
                    </div>
                    <div style={{ color: '#6B7280', fontSize: '11px', lineHeight: '1.5' }}>
                      Clarivue captures everything — you stay focused.
                    </div>
                  </div>
                </div>
                
                <div style={valueItemStyle}>
                  <div style={iconStyle('linear-gradient(135deg, #EC4899 0%, #BE185D 100%)')}>
                    👁️
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1F2937', marginBottom: '3px', fontSize: '13px' }}>
                      Ask better questions.
                    </div>
                    <div style={{ color: '#6B7280', fontSize: '11px', lineHeight: '1.5' }}>
                      Real-time cues and follow-ups, right when you need them.
                    </div>
                  </div>
                </div>
                
                <div style={valueItemStyle}>
                  <div style={iconStyle('linear-gradient(135deg, #10B981 0%, #047857 100%)')}>
                    📊
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1F2937', marginBottom: '3px', fontSize: '13px' }}>
                      Decide with confidence.
                    </div>
                    <div style={{ color: '#6B7280', fontSize: '11px', lineHeight: '1.5' }}>
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
                marginTop: '45px',
                marginBottom: '25px'
              }}>
                <img 
                  src="/chrissy-moore.png"
                  alt="Chrissy Moore"
                  style={{ 
                    width: '300px', 
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
                marginTop: '-60px',
                marginLeft: '10%'
              }}>
                <blockquote style={{ 
                  fontSize: '24px', 
                  fontWeight: '700', 
                  marginBottom: '24px', 
                  lineHeight: '1.3',
                  color: 'white',
                  margin: '0 0 24px 0'
                }}>
                  "We're hiring faster, more confidently, and with less effort."
                </blockquote>
                
                {/* Attribution */}
                <div>
                  <div style={{ 
                    fontWeight: '700', 
                    fontSize: '18px', 
                    color: 'white',
                    marginBottom: '4px'
                  }}>
                    Chrissy Moore
                  </div>
                  <div style={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: '16px',
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
              fontSize: '20px', 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: '24px' 
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
                  style={{ borderRadius: '8px', height: '40px' }}
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
                  style={{ borderRadius: '8px', height: '40px' }}
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
                  style={{ borderRadius: '8px', height: '40px' }}
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
                    gap: '8px',
                    alignItems: 'flex-start'
                  }}>
                    <Radio.Button value="small" style={{ 
                      textAlign: 'left', 
                      width: 'auto',
                      minWidth: 'fit-content',
                      padding: '0 16px'
                    }}>
                      &lt; 100
                    </Radio.Button>
                    <Radio.Button value="medium" style={{ 
                      textAlign: 'left', 
                      width: 'auto',
                      minWidth: 'fit-content',
                      padding: '0 16px'
                    }}>
                      100 to 500
                    </Radio.Button>
                    <Radio.Button value="large" style={{ 
                      textAlign: 'left', 
                      width: 'auto',
                      minWidth: 'fit-content',
                      padding: '0 16px'
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
                  style={{ borderRadius: '8px', height: '40px' }}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: '100%',
                    height: '48px',
                    background: 'linear-gradient(135deg, #1E2A78 0%, #5F9DF7 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    boxShadow: '0 4px 12px rgba(31, 42, 120, 0.3)',
                    marginBottom: '32px'
                  }}
                >
                  Pick a time
                </Button>
                
                {/* Stats Bar */}
                <div style={{
                  background: 'linear-gradient(135deg, #8BE6A8, #7AC4E8)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  color: '#2D3748'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
                      6-10 hrs
                    </div>
                    <div style={{ fontSize: '11px', opacity: 0.9, lineHeight: '1.3' }}>
                      Average time recruiters save per week.
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
                      91%
                    </div>
                    <div style={{ fontSize: '11px', opacity: 0.9, lineHeight: '1.3' }}>
                      Satisfaction with interviewers and hiring managers.
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
                      28%
                    </div>
                    <div style={{ fontSize: '11px', opacity: 0.9, lineHeight: '1.3' }}>
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