import React from 'react';
import { Router } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundary } from './components/DefaultCatchBoundary'
import { NotFound } from '@/page/NotFound'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='home' element={<Home/>} />
                <Route exact path='/' element={<JiraIssue/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </Router>
    );
}
