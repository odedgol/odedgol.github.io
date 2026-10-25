import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjects } from '../../../lib/content';

const architectures: Record<string, {label:string;steps:{title:string;detail:string}[];principles:string[]}> = {
  truthlens: {
    label:'Conceptual evaluation flow',
    steps:[
      {title:'AI Answer',detail:'Claims to verify'},
      {title:'Evidence',detail:'Sources and context'},
      {title:'Evaluation',detail:'Support and faithfulness'},
      {title:'Report',detail:'Findings and limits'}
    ],
    principles:['Evidence First','Claim-Level Analysis','Reproducible Evaluation','Human-Readable Reports']
  },
  'agentic-production-intelligence': {
    label:'Conceptual investigation flow',
    steps:[
      {title:'Signals',detail:'Logs, metrics, context'},
      {title:'Investigation',detail:'Correlate observations'},
      {title:'Hypotheses',detail:'Cause and impact'},
      {title:'Engineer',detail:'Review and approve'}
    ],
    principles:['Agentic Workflows','Observability','Root Cause Analysis','Human-in-the-Loop']
  }
};

export function generateStaticParams() {
  return getProjects().map(project => ({slug:project.slug}));
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const project=getProjects().find(item=>item.slug===slug);
  if (!project) notFound();
  const architecture=architectures[slug];
  return <main className="inner case-study">
    <Link className="back" href="/projects/">← All projects</Link>
    <div className="case-kicker">ENGINEERING CASE STUDY · {project.status.toUpperCase()}</div>
    <h1>{project.title}</h1>
    <p className="case-question">{project.question}</p>
    <p className="case-summary">{project.summary}</p>
    <div className="case-tags">{project.technologies.map(tag=><span key={tag}>{tag}</span>)}</div>
    {architecture && <section className="case-architecture">
      <div className="section-heading"><h2>System Thinking</h2><span>{architecture.label}</span></div>
      <div className="case-flow" role="img" aria-label={architecture.steps.map(s=>s.title).join(' to ')}>
        {architecture.steps.map((step,index)=><div className="case-flow-part" key={step.title}>
          <div className="case-flow-step"><span className="case-step-number">0{index+1}</span><strong>{step.title}</strong><small>{step.detail}</small></div>
          {index<architecture.steps.length-1&&<span className="case-flow-arrow" aria-hidden="true">→</span>}
        </div>)}
      </div>
      <p className="case-note">An illustrative architecture view. Components and integrations may evolve as implementation progresses.</p>
    </section>}
    <section className="case-content">
      <div className="section-heading"><h2>Behind the Project</h2></div>
      <article className="prose" dangerouslySetInnerHTML={{__html:project.html}}/>
    </section>
    {architecture && <section>
      <div className="section-heading"><h2>Engineering Focus</h2></div>
      <div className="case-principles">{architecture.principles.map(item=><span key={item}>{item}</span>)}</div>
    </section>}
    <section>
      <div className="section-heading"><h2>Demo & Results</h2><span>Coming after validation</span></div>
      <div className="case-demo"><span className="case-play" aria-hidden="true">▷</span><strong>Real product walkthrough</strong><p>A recorded demo, screenshots, and verified evaluation results will appear here once the project is ready.</p><small>DEMO PLACEHOLDER · NO VIDEO PUBLISHED YET</small></div>
    </section>
    <div className="case-end"><Link href="/projects/">← Explore other projects</Link><a href="mailto:odedgol@gmail.com">Discuss this project ↗</a></div>
  </main>;
}
