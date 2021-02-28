import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './over.css';
import Text from './text'

export default class Over extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section className="OverCss">
                <input className="OVerButton" type="button" value="Over" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <Text />
                        <button className="Close" href="javascript:void(0);" onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
        );
    }
}