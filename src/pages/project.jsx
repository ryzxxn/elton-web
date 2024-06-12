import Navbar from '../components/navbar';
import memoryState from 'memory-state';

export default function Project() {
    const project = memoryState.getState('project')
    
  return (
    <div style={{ height: '100vh' }}>
      <div className='page_main'>
        <Navbar />
        <div style={{padding: '1rem'}}>
          {project.map((project, index) => (
            <div key={index} style={{display: 'flex', gap: '1rem', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <div style={{minWidth: '16rem'}}>
                        <img src={project.thumbnail} alt={project.ProjectName}  style={{maxHeight: '9rem', maxWidth: '16rem'}}/>
                    </div>
                    <div style={{padding: '0rem 1rem', color: 'white'}}>
                        <p style={{fontWeight: '800', fontSize: '1.4rem'}}>{project.ProjectName}</p>
                        <p>{project.description}</p>
                        <p style={{backgroundColor: 'rgb(0,0,0,0.2)', width: 'auto', padding: '0rem 0.4rem', borderRadius: '.5rem', wordBreak: 'normal'}}>{project.stack.join(' | ')}</p>
                    </div>
                </div>

                <div style={{padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '.5rem'}}>
                    <a style={{backgroundColor: 'black', color: 'white', textAlign:'center', padding: '.5rem 1rem', textDecoration: 'none', fontWeight: '800'}} href={project.link}>Live</a>
                    <a style={{backgroundColor: 'black', color: 'white', textAlign:'center', padding: '.5rem 1rem', textDecoration: 'none', fontWeight: '800'}} href={project.repo}>Repository</a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
