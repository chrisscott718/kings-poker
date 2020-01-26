import React, { Component } from "react";
import "./style.scss";
import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import photos from "./photos";

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
