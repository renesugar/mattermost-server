// Copyright (c) 2015 Spinpunch, Inc. All Rights Reserved.
// See License.txt for license information.

export default class EmailVerify extends React.Component {
    constructor(props) {
        super(props);

        this.handleResend = this.handleResend.bind(this);

        this.state = {};
    }
    handleResend() {
        const newAddress = window.location.href.replace('?resend_success=true', '').replace('&resend_success=true', '');
        window.location.href = newAddress + '&resend=true';
    }
    render() {
        var title = '';
        var body = '';
        var resend = '';
        let resendConfirm = '';
        if (this.props.isVerified === 'true') {
            title = global.window.config.SiteName + ' Email Verified';
            body = <p>Your email has been verified! Click <a href={this.props.teamURL + '?email=' + this.props.userEmail}>here</a> to log in.</p>;
        } else {
            title = global.window.config.SiteName + ' Email Not Verified';
            body = <p>Please verify your email address. Check your inbox for an email.</p>;
            resend = (
                <button
                    onClick={this.handleResend}
                    className='btn btn-primary'
                >
                    Resend Email
                </button>
            );
            if (window.location.href.indexOf('resend_success=true') > -1) {
                resendConfirm = <div><br /><p className='alert alert-success'><i className='fa fa-check'></i>{' Verification email sent.'}</p></div>;
            }
        }

        return (
            <div className='col-sm-offset-4 col-sm-4'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <h3 className='panel-title'>{title}</h3>
                    </div>
                    <div className='panel-body'>
                        {body}
                        {resend}
                        {resendConfirm}
                    </div>
                </div>
            </div>
        );
    }
}

EmailVerify.defaultProps = {
    isVerified: 'false',
    teamURL: '',
    userEmail: ''
};
EmailVerify.propTypes = {
    isVerified: React.PropTypes.string,
    teamURL: React.PropTypes.string,
    userEmail: React.PropTypes.string
};
