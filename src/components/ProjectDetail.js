import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiActivity, FiDatabase, FiBarChart2, FiCode, FiBookOpen, FiSettings } from 'react-icons/fi';
import NotificationBar from './NotificationBar';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = {
    1: {
      title: '16S/ITS Amplicon Sequencing',
      icon: <FiActivity />,
      color: '#00843D',
      description: 'Comprehensive analysis of microbial communities using targeted sequencing of 16S rRNA and ITS regions.',
      details: [
        'High-throughput sequencing of bacterial and fungal communities',
        'Taxonomic classification and diversity analysis',
        'Community composition and structure assessment',
        'Comparative analysis between samples',
        'Statistical analysis and visualization'
      ],
      benefits: [
        'Cost-effective microbial profiling',
        'Rapid turnaround time',
        'Standardized workflow',
        'Comprehensive data analysis'
      ],
      applications: [
        'Environmental monitoring',
        'Microbiome studies',
        'Food safety analysis',
        'Clinical research'
      ]
    },
    2: {
      title: 'Full-Length 16S Sequencing',
      icon: <FiDatabase />,
      color: '#00843D',
      description: 'High-resolution taxonomic profiling with complete 16S rRNA gene sequencing for detailed microbial identification.',
      details: [
        'Complete 16S rRNA gene sequencing',
        'High-resolution taxonomic classification',
        'Species-level identification',
        'Enhanced phylogenetic analysis',
        'Detailed community profiling'
      ],
      benefits: [
        'Improved taxonomic resolution',
        'Better species discrimination',
        'Enhanced phylogenetic analysis',
        'Comprehensive reference database'
      ],
      applications: [
        'Strain-level identification',
        'Novel species discovery',
        'Clinical diagnostics',
        'Biotechnology applications'
      ]
    },
    3: {
      title: 'Shotgun Metagenomic Sequencing',
      icon: <FiBarChart2 />,
      color: '#00843D',
      description: 'Comprehensive analysis of entire microbial communities, including functional potential and taxonomic composition.',
      details: [
        'Whole genome sequencing of microbial communities',
        'Functional gene analysis',
        'Metabolic pathway reconstruction',
        'Strain-level resolution',
        'Antibiotic resistance gene detection'
      ],
      benefits: [
        'Comprehensive community analysis',
        'Functional insights',
        'High resolution',
        'Novel gene discovery'
      ],
      applications: [
        'Drug discovery',
        'Pathogen detection',
        'Bioprospecting',
        'Environmental monitoring'
      ]
    },
    4: {
      title: 'Metatranscriptomic Sequencing',
      icon: <FiCode />,
      color: '#00843D',
      description: 'Analysis of active gene expression in microbial communities to understand functional activity.',
      details: [
        'RNA sequencing of microbial communities',
        'Gene expression analysis',
        'Active pathway identification',
        'Temporal activity patterns',
        'Host-microbe interactions'
      ],
      benefits: [
        'Active function analysis',
        'Temporal resolution',
        'Host response insights',
        'Pathway activity measurement'
      ],
      applications: [
        'Disease research',
        'Drug response studies',
        'Environmental monitoring',
        'Industrial bioprocessing'
      ]
    },
    5: {
      title: 'Long-Read Metagenomic Sequencing & Assembly',
      icon: <FiBookOpen />,
      color: '#00843D',
      description: 'High-quality genome assembly and analysis using long-read sequencing technology for complete microbial genomes.',
      details: [
        'Long-read sequencing technology',
        'De novo genome assembly',
        'Structural variant detection',
        'Complete genome reconstruction',
        'Mobile genetic element analysis'
      ],
      benefits: [
        'Complete genome assembly',
        'Complex region resolution',
        'Structural insight',
        'Mobile element detection'
      ],
      applications: [
        'Genome completion',
        'Plasmid analysis',
        'Antimicrobial resistance',
        'Biotechnology'
      ]
    },
    6: {
      title: 'Custom Service',
      icon: <FiSettings />,
      color: '#00843D',
      description: 'Tailored sequencing solutions designed to meet your specific research needs and requirements.',
      details: [
        'Customized experimental design',
        'Flexible workflow options',
        'Specialized analysis pipelines',
        'Consultation services',
        'Project-specific optimization'
      ],
      benefits: [
        'Tailored solutions',
        'Expert consultation',
        'Flexible design',
        'Specialized analysis'
      ],
      applications: [
        'Novel applications',
        'Method development',
        'Specialized research',
        'Technology optimization'
      ]
    }
  };

  const service = services[id];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="dashboard-main">
      <NotificationBar notifications={[]} />
      <div className="project-detail">
        <button className="back-button" onClick={() => navigate('/services')}>
          <FiArrowLeft /> Back to Services
        </button>
        
        <div className="project-header">
          <div className="service-icon" style={{ color: service.color }}>
            {service.icon}
          </div>
          <div className="service-info">
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        </div>

        <div className="detail-sections">
          <div className="detail-section">
            <h2>Service Details</h2>
            <ul>
              {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h2>Benefits</h2>
            <ul>
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h2>Applications</h2>
            <ul>
              {service.applications.map((application, index) => (
                <li key={index}>{application}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="action-buttons">
          <button className="primary-button" onClick={() => navigate('/cart')}>
            Add to Cart
          </button>
          <button className="secondary-button" onClick={() => window.location.href = 'mailto:support@zymo.com'}>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 