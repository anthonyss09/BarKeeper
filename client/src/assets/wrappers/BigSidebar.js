import styled from "styled-components";

const Wrapper = styled.aside`

  .bar-keeper {
    // margin: 2rem 0 0 2rem;
    position: absolute;
    top: 1rem;
    left 1rem;
    font-size: 2rem;
  }
  .link-item {
    margin-right: 0.4rem;
    
    }
  .nav-link {
    background: var(--link-green-light);
    padding: 1rem 0 1rem 4rem;
    transition: var(--transition);
  }
  .nav-link:hover {
    padding-left: 5rem;
    background: var(--link-green-medium);
     
  }
  .active {
    background: var(--link-green-dark);
  }
 
  .nav-links {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    width: 14rem;
  }
`;

export default Wrapper;
