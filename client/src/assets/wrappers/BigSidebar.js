import styled from "styled-components";

const Wrapper = styled.aside`

  .bar-keeper {
    position: absolute;
    top: 0.3rem;
    left 1rem;
    font-size: 2.4rem;
  }
  .link-item {
    margin-right: 0.5rem;
  }
  .nav-link {
    background: var(--link-green-light);
    background: beige;
    background: rgb(245,245,240);
    padding: 1rem 0 1rem 4rem;
    transition: var(--transition);
  }
  .nav-link:hover {
    padding-left: 5rem;
    background: rgb(236, 231, 200);
    background: rgb(200,200,180);
    background: var(--link-green-medium);
    background: rgb(248, 241, 218);
    background: rgb(230,230,225); 
  }
  .active {
    background: var(--link-green-dark);
    background: rgb(220,220,215); 
  }
  .header {
    height: 4rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    width: 14rem;
  }
`;

export default Wrapper;
