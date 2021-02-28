import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './meer.css'
import Text from './text'

export default class Meer extends Component {
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
                <input className="MeerButton" type="button" value="Meer" onClick={() => this.openModal()} />
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