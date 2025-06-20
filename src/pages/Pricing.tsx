import React from 'react';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

// Logo data for trusted brands section
const LOGO_DATA = [
  { src: "/brandsocials/KaiOS-Logo.wine.svg", alt: "KaiOS" },
  { src: "/brandsocials/Libra-Logo.wine.svg", alt: "Libra" },
  { src: "/brandsocials/Fitbit-Logo.wine.svg", alt: "Fitbit" },
  { src: "/brandsocials/OnePlus-Logo.wine.svg", alt: "OnePlus" },
  { src: "/brandsocials/Foxtel-Logo.wine.svg", alt: "Foxtel" },
  { src: "/brandsocials/square-logo.wine.svg", alt: "Square" },
  { src: "/brandsocials/plaidlogo.wine.svg", alt: "Plaid" },
  { src: "/brandsocials/nest-labs-logo-svgrepo-com.svg", alt: "Nest Labs" },
  { src: "/brandsocials/brex-1.svg", alt: "Brex" }
] as const;

export default function Pricing() {
  const pageStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #EBF4FF 0%, #C3DAFE 50%,rgb(81, 177, 247) 100%)',
    padding: '120px 16px 48px',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '48px'
  };

  const pricingGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    marginBottom: '48px'
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '16px',
    padding: '32px 24px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    position: 'relative' as const,
    height: 'fit-content'
  };

  const popularCardStyle = {
    ...cardStyle,
    border: '3px solid rgba(139, 230, 168, 0.8)',
    transform: 'scale(1.05) translateY(-8px)',
    boxShadow: `
      0 20px 40px rgba(0, 0, 0, 0.15),
      0 8px 20px rgba(139, 230, 168, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.8),
      inset 0 -1px 0 rgba(0, 0, 0, 0.1)
    `,
    background: `
      linear-gradient(145deg, #ffffff 0%, #f8fcff 100%)
    `,
    position: 'relative' as const,
    zIndex: 10,
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '0',
      borderRadius: '16px',
      padding: '3px',
      background: 'linear-gradient(135deg, #8BE6A8, #7AC4E8)',
      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      maskComposite: 'xor'
    }
  };

  const popularBadgeStyle = {
    position: 'absolute' as const,
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: "linear-gradient(135deg, #8BE6A8, #7AC4E8)",
    color: '#1F2937',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(81, 177, 247, 0.3)',
    animation: 'gleam 3s ease-in-out infinite'
  };

  const featureStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    marginBottom: '12px',
    fontSize: '14px',
    lineHeight: '1.5'
  };

  const checkIconStyle = {
    color: '#10B981',
    fontSize: '16px',
    marginTop: '2px',
    flexShrink: 0
  };

  const buttonStyle = {
    width: '100%',
    height: '48px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '24px'
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(135deg, #8BE6A8, #7AC4E8)",
    border: 'none',
    color: 'white',
    boxShadow: '0 4px 12px rgba(31, 42, 120, 0.3)'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    background: 'transparent',
    border: '2px solidrgb(6, 77, 159)',
    color: '#1E2A78'
  };

  // Trust section styles
  const trustSectionStyle = {
    padding: '48px 16px',
    textAlign: 'center' as const,
    marginTop: '8px'
  };

  const trustTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: '32px',
    lineHeight: '1.2'
  };

  const logoGridStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    maxWidth: '1000px',
    margin: '0 auto',
    alignItems: 'center'
  };

  const logoRowStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    width: '100%'
  };

  const logoItemStyle = {
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '140px'
  };

  const logoImageStyle = {
    height: '100%',
    width: '100%',
    maxWidth: '98px',
    maxHeight: '42px',
    objectFit: 'contain' as const,
    filter: 'brightness(0) saturate(100%) invert(26%) sepia(89%) saturate(1583%) hue-rotate(204deg) brightness(97%) contrast(105%)',
    opacity: 0.8,
    transition: 'all 0.3s ease'
  };

  const keyframesCSS = `
    @keyframes gleam {
      0% {
        box-shadow: 0 4px 12px rgba(81, 177, 247, 0.3), inset 0 0 0 rgba(255, 255, 255, 0);
      }
      50% {
        box-shadow: 0 4px 12px rgba(81, 177, 247, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.4);
      }
      100% {
        box-shadow: 0 4px 12px rgba(81, 177, 247, 0.3), inset 0 0 0 rgba(255, 255, 255, 0);
      }
    }
  `;

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = keyframesCSS;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: '700', 
            color: '#1F2937', 
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            Pricing
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#4B5563', 
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            For fast-moving teams who want faster, fairer, and more confident hiring.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={pricingGridStyle}>
          {/* Free Tier */}
          <div style={cardStyle}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: '8px' 
            }}>
              Free
            </h3>
            
            <div style={{ marginBottom: '16px' }}>
              <span style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#1F2937' 
              }}>
                $0
              </span>
            </div>

            <p style={{ 
              color: '#6B7280', 
              fontSize: '16px', 
              marginBottom: '24px',
              lineHeight: '1.5'
            }}>
              For lean teams or early-stage startups that want to streamline interviews at no cost.
            </p>

            <Button style={secondaryButtonStyle}>
              Get started
            </Button>

            <div style={{ marginBottom: '24px', marginTop: '24px' }}>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>60 free minutes/month</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Access to real-time prompts & smart follow-ups</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Interview summary history (7 days)</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Integrates with Zoom, Google Meet, Teams</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Basic insights & scoring</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Email support</span>
              </div>
            </div>
          </div>

          {/* Pro Tier */}
          <div style={popularCardStyle}>
            <div style={popularBadgeStyle}>
              Most Popular
            </div>
            
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: '8px' 
            }}>
              Pro
            </h3>
            
            <div style={{ marginBottom: '16px' }}>
              <span style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#1F2937' 
              }}>
                $39
              </span>
              <span style={{ 
                fontSize: '16px', 
                color: '#6B7280', 
                marginLeft: '4px' 
              }}>
                per seat/month
              </span>
              <div style={{ 
                fontSize: '14px', 
                color: '#6B7280', 
                marginTop: '4px' 
              }}>
                billed annually ($49 billed monthly)
              </div>
            </div>

            <p style={{ 
              color: '#6B7280', 
              fontSize: '16px', 
              marginBottom: '24px',
              lineHeight: '1.5'
            }}>
              For hiring teams ready to level up with automation, insights, and collaboration.
            </p>

            <Button style={primaryButtonStyle}>
              Get started
            </Button>

            <div style={{ marginBottom: '16px', marginTop: '24px' }}>
              <div style={featureStyle}>
                <span><strong>Everything in Free, plus:</strong></span>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Unlimited minutes</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Unlimited members</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Full history & analytics</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Shared scorecards</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Centralized billing & admin dashboard</span>
              </div>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div style={cardStyle}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: '#1F2937', 
              marginBottom: '8px' 
            }}>
              Enterprise
            </h3>
            
            <div style={{ marginBottom: '16px' }}>
              <span style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#1F2937' 
              }}>
                Custom
              </span>
            </div>

            <p style={{ 
              color: '#6B7280', 
              fontSize: '16px', 
              marginBottom: '24px',
              lineHeight: '1.5'
            }}>
              For high-volume or security-focused organizations needing total control.
            </p>

            <Button style={secondaryButtonStyle}>
              Talk to Sales
            </Button>

            <div style={{ marginBottom: '16px', marginTop: '24px' }}>
              <div style={featureStyle}>
                <span><strong>Everything in Pro, plus:</strong></span>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Dedicated success manager</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>SSO (SAML & OpenID)</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>SCIM provisioning</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Role-based access controls</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>Custom data retention & audit logs</span>
              </div>
              <div style={featureStyle}>
                <CheckOutlined style={checkIconStyle} />
                <span>SOC 2, GDPR, and enterprise compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section - Brand Logos */}
        <div style={trustSectionStyle}>
          <text style={trustTitleStyle}>
            Empowering hiring teams of all sizes to act more swiftly and hire with assurance.
          </text>
          <div style={logoGridStyle}>
            {/* First Row - 5 logos */}
            <div style={logoRowStyle}>
              {LOGO_DATA.slice(0, 5).map((logo, index) => (
                <div key={`${logo.alt}-${index}`} style={logoItemStyle}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={logoImageStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* Second Row - 4 logos (centered) */}
            <div style={logoRowStyle}>
              {LOGO_DATA.slice(5, 9).map((logo, index) => (
                <div key={`${logo.alt}-${index + 5}`} style={logoItemStyle}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={logoImageStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 