import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Paper, FormControl, Input, InputLabel} from '@material-ui/core';


const styles = {

};

class ContactMultiLine extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Paper className={this.props.classPaper}>
                <Grid container
                      direction="row"
                      spacing={16}
                      justify="flex-start"
                      alignItems="flex-end">
                    <Grid item className={this.props.classIconBox}>
                        {this.props.children}
                    </Grid>
                    <Grid item className={this.props.classInputBox}>
                        <FormControl className={this.props.classForm}>
                            <InputLabel htmlFor="contactName">{this.props.label}</InputLabel>
                            <Input id={this.props.id}
                                   fullWidth
                                   type="text"
                                   multiline
                                   rowsMax="3"
                                   value={this.props.contactField}
                                   onChange={this.props.handleInput}
                                   className={this.props.classFormField}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

ContactMultiLine.propTypes = {
    classes: PropTypes.object,
    classPaper: PropTypes.string,
    classIconBox: PropTypes.string,
    classInputBox: PropTypes.string,
    classForm: PropTypes.string,
    classFormField: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    contactField: PropTypes.string,
    handleInput: PropTypes.func
}

export default withStyles(styles)(ContactMultiLine);
