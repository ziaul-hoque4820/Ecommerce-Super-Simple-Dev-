import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/error.css";
import errorImg from '../assets/images/404 Error Page.gif'

export default function ErrorPage() {

    return (
        <div className="error-page">
            <div className="error-card">
                <img
                    src={errorImg}
                    alt="Error illustration"
                    className="error-image"
                />
                <h1 className="error-title">404 — Page Not Found</h1>
                <p className="error-sub">
                    We can't seem to find the page you're looking for
                </p>

                <Link to="/" className="home-button">
                    Go Home
                </Link>
            </div>
        </div>
    );
}
