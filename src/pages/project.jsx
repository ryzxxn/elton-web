import Navbar from '../components/navbar';
import memoryState from 'memory-state';

export default function Project() {
    const project = memoryState.getState('project')
    
  return (
    <div style={{ height: '100vh' }}>
      <div className='page_main'>
        <Navbar />
        <div style={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          {project.map((project, index) => (
            <div className='project_container' key={index} style={{display: 'flex', gap: '1rem', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}>
                    <div style={{minWidth: '16rem'}}>
                        <img src={project.thumbnail} alt={project.ProjectName}  style={{maxHeight: '9rem', maxWidth: '16rem', borderRadius: '.7rem'}}/>
                    </div>
                </div>

                <div className='project_discription' style={{display: 'flex', gap: '1rem', justifyContent: 'space-between', flex: '1', alignItems: 'start'}}>
                    <div style={{minWidth: '16rem'}}>
                      <p style={{fontWeight: '800', fontSize: '1.4rem', color: 'white', textShadow: '1px 1px 2px black'}}>{project.ProjectName}</p>
                      <p style={{color: 'white', textShadow: '1px 1px 2px black'}}>{project.description}</p>
                      <p style={{color: 'white'}}>{project.stack.join(' | ')}</p>
                    </div>

                    <div style={{padding: '0rem 0rem', color: 'white', display: 'flex', alignItems: 'center'}}>
                      <a style={{backgroundColor: 'black', color: 'white', textAlign:'center', padding: '.5rem 1rem', textDecoration: 'none', fontWeight: '800'}} href={project.link}>Live</a>
                      <a style={{backgroundColor: 'black', color: 'white', textAlign:'center', padding: '.5rem 1rem', textDecoration: 'none', fontWeight: '800'}} href={project.repo}>Repository</a>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
