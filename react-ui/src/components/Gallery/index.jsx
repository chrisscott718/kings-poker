import React, { Component } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import photos from "./photos";
import { Button } from "Shared/Button";

export default class Gallery extends Component {
  state = {
    currentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (event, { index }) => {
    this.setState({
      currentImage: index,
      viewerIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false,
    });
  };

  render() {
    const { viewerIsOpen, currentImage } = this.state;
    return (
      <main className='gallery container'>
        <section className='description'>
          <h1>The Gallery</h1>
          <span className='seperator' />
          <p className='t-light t-muted'>
            Here you can view a gallery of our custom built gaming tables. We
            offer a variety customization options to build your perfect table.
            These are only a few of our many tables. If you don't see something
            you are looking for contact us and we can make it happen.
          </p>
          <span className='mb4 d-block' />
          <h4 className='mb4'>Let us create your next gaming table!</h4>
          <NavLink to='/buildyourown'>
            <Button className='mb4'>Build a Table</Button>
          </NavLink>
          <p className='t-sm t-muted'>or call us today</p>
          <a className='c-gold t-bold td-none t-md' href='tel:1-800-897-1189'>
            800-897-1189
          </a>
        </section>
        <section>
          <PhotoGallery photos={photos} onClick={this.openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={this.closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </section>
      </main>
    );
  }
}
